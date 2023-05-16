const products = [
    {
        id: '1',
        name: ' Manta Polar',
        price: 5.450,
        category: "Textil",
        img:'https://donorione.com.ar/Articulo_Foto/foto1_4837_0.jpeg',
        stock: 10,
        description: 'Medidas: 160 x 240 cm aproximado'
    },
    {
        id: '2',
        name: 'Manta Corderito',
        price: 20.999,
        category: "Textil",
        img:'https://http2.mlstatic.com/D_NQ_NP_928693-MLA49797709099_042022-O.jpg',
        stock: 15,
        description: 'Medida: 150 x 180 cm.'
    },
    {
        id: '3',
        name: ' Manta Plush',
        price: 3.699,
        category: "Textil",
        img:'data:image/jpeg;base64,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',
        stock: 5,
        description: 'Medidas 2.10 X 2.20 cm' 
    }
]

export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}