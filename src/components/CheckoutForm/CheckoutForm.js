import { useState } from "react"



const CheckoutForm = ( {onConfirm} ) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name,
            phone,
            email
        }
        
        onConfirm(userData)
    }

    return(
        <div >
            <form onSubmit={handleConfirm} className="">
                <label>
                    Nombre
                </label>
                <input
                className=""
                type="text"
                value={name}
                onChange={({target}) => setName(target.value)}
                />
                <label>
                    Telefono
                </label>
                <input
                className=""
                type="text"
                value={phone}
                onChange={({target}) => setPhone(target.value)}
                />
                <label>
                    Email
                </label>
                <input
                className=""
                type="text"
                value={email}
                onChange={({target}) => setEmail(target.value)}
                />
                <div>
                    <button type='submit'>Crear Orden</button>
                </div>
            </form>
        </div>
    )

}

export default CheckoutForm