import { useState } from "react";


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);
    
    const increment = () => {
        if(quantity < stock){
            setQuantity( quantity + 1 )
        }
    }
    const decrement = () => {
        if ( quantity > 1) {
            setQuantity( quantity - 1 )
        }
    }
  
    return(
        <>
            <div className="itemcount-botonera">
                <button className="itemcount-botonera_contar" onClick={decrement}>-</button>
                <div className="itemcount-total">{quantity}</div>
                <button className="itemcount-botonera_contar" onClick={increment}>+</button>
            </div>
            <button className="itemcount-carrito" onClick={ () => onAdd(quantity)} disabled={!stock} >Agregar al carrito</button>
        </>
    )
}

export default ItemCount;