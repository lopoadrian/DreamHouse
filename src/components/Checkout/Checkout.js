import { useContext, useState } from "react";

import { db } from "../../service/firebase/firebaseConfig";
import { Timestamp, addDoc, collection, documentId, getDocs, query, writeBatch, where } from "firebase/firestore";


import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../../context/CartContext";





const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)
        
        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            
            const productsRef = collection(db, 'Items')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore
    
            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                
                console.log(productAddedToCart)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id:doc.id, ...dataDoc})
                }
            })

                if(outOfStock.length === 0){
                    await batch.commit()

                    const orderRef = collection(db, 'orders')

                    const orderAdded = await addDoc(orderRef, objOrder)

                    setOrderId(orderAdded.id)
                    clearCart()
                } else {
                    console.error('hay productos que estan fuera de stock')
                }

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        
    }

    if (loading){
        return <div className="compra-order"><h1>Se esta generando su orden...</h1></div>
    }

    if(orderId){
        return (
        <div className="compra-order">
            <h1>El Id de su orden es: {orderId}</h1>
            <h2>Pronto se le enviara un correo con informacion de contacto y link de sucursal de envio para seguimiento. Muchas Gracias por su compra!!!</h2>
            
        </div>)
    }

    return(
        <div className="compra">
            <h1>Complete el formularo para seguir con el Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>

    )
}

export default Checkout;