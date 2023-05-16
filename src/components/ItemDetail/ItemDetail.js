import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{

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
                    onAdd = { ( quantity ) => console.log('Cantidad Agregada ',quantity)}
                />
            </footer>
        </article>
    )
}

export default ItemDetail
