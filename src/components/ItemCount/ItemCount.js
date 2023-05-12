import { useState } from "react";


const ItemCount = () => {
    const [contador, setContador] = useState(0);
    

    

    return(
        <>
            <div className="itemcount-botonera">
                <button className="itemcount-botonera_contar" onClick={ () => setContador(contador - 1)}>-</button>
                <div className="itemcount-total">{contador < 0 ? setContador(0) : contador}</div>
                <button className="itemcount-botonera_contar" onClick={ () => setContador(contador + 1)}>+</button>
            </div>
            <button className="itemcount-carrito">Agregar al carrito</button>
        </>
    )
}

export default ItemCount;