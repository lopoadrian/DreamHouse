import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () =>{
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return(
            <div>
                <h1>
                    No hay items en el carrito
                </h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }

    return(
        <div className="cart">
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div className="cart-total">
                <button className="limpiar" onClick={() => clearCart()}> Limpiar Carrito </button>
                <p className="total">Total: ${total}</p>  
            <Link to='/checkout' className="checkout">checkout</Link>
            </div> 
        </div>
    )

}

export default Cart;