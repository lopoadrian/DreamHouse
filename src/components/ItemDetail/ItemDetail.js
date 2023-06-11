import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem } = useContext(CartContext)

    const handleonAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,
            name, 
            price,
            img
        }

        addItem(item, quantity)
        
    }

    return (
        <article className=''>
            <header className="Detail-header">
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                
                <p>
                    Categoria: {category}
                </p>
                
                <p>
                    Descripcion: {description}
                </p>
                
                <p>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                <ItemCount 
                    initial={1}
                    stock = { stock }
                    onAdd = { ( quantity ) => handleonAdd( quantity )}
                />
            </footer>
        </article>
    )
}

export default ItemDetail
