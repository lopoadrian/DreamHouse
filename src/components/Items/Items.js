const Item = ({id, name, img, price, stock}) => {
    return (
        <article>
            <header className="Item-header">
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
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                <button>Ver Detalle</button>
            </footer>
        </article>
    )
}

export default Item

