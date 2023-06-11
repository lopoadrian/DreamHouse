import { useContext } from 'react'
import cart from '../../assest/carrito.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () =>{

    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <Link to='/cart'  className="carrito" style={{ display: totalQuantity > 0 ? 'flex' : 'none' }}>
                <img src={cart} className="carro" alt="cart-widget"/> 
                <p>{ totalQuantity }</p>
            </Link>
        </div>
    )
}

export default CartWidget