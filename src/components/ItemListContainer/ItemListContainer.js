import ItemCount from "../ItemCount/ItemCount.js"

const ItemListContainer = ({greeting}) => {
    return (
        <div className="saludo">
            <h1>{greeting}</h1>
            <ItemCount 
                stock={0} 
                initial={1}
                onAdd ={(quantity) => console.log('Cantidad Agregada', quantity)}
            />
        </div>
    )
}

export default ItemListContainer