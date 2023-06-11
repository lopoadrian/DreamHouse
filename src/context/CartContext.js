import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []   
} )


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
    

    console.log(cart);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
            setTotal(total + item.price)
            setTotalQuantity(totalQuantity + quantity)

        } else {
            console.error('El producto ya fie agregado')
        }
    }

    const removeItem = (itemId, price) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setTotalQuantity(totalQuantity - 1)
        setTotal(total - price)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
        setTotal(0)
        setTotalQuantity(0)

    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

   

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            { children }

        </CartContext.Provider>
    )

}