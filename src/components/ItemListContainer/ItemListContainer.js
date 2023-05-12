import ItemCount from "../ItemCount/ItemCount.js"

const ItemListContainer = ({greeting}) => {
    return (
        <div className="saludo">
            <h1>{greeting}</h1>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer