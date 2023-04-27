import cart from '../../assest/carrito.svg'

const CartWidget = () =>{
    return (
        <div className="carrito">
            <img src={cart} className="carro" alt="cart-widget"/> 
            <p>0</p>
        </div>
    )
}

export default CartWidget