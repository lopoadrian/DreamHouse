import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";


const Cart = () =>{
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return(
            <div className="carrito-vacio">
                <h1>
                    Carrito vacio! puedes regresar al incio con el siguiente boton
                </h1>
                <Link to='/' className="Option">Regresar</Link>
            </div>
        )
    }

    return(
        <div className="cart">
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div className="cart-total">
                <button className="limpiar" onClick={() => clearCart()}> Limpiar Carrito </button>
                <p className="total">Total: ${total}</p>  
            <Link to='/Checkout' className="checkout">checkout</Link>
            </div> 
        </div>
    )

}

export default Cart;