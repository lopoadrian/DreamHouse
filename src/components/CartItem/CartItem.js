import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({id, name, img, price, quantity}) => {
    const {removeItem } =  useContext(CartContext)
   

    return(
        <div className="carritoItems">
            <img src={img}/>
            <h2>{name}</h2>
            <p>Cantidad: { quantity }</p>
            <p>Precio: { price }</p>
            <p>Subtotal: {price * quantity} </p>
            <button onClick={() => removeItem(id, price)}>Eliminar </button>
        </div>
    )
} 

export default CartItem;