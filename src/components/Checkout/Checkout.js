import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext'
import FirebaseContext from '../../context/FirebaseContext'
import CheckoutItem from './CheckoutItem'
import { NavLink } from 'react-router-dom';
import '../../styles/Checkout.css'


const Checkout = () => {
    const firebaseContext = useContext(FirebaseContext);
    const cartContext = useContext(CartContext);
    const [validado, setValidado] = useState(false)
    const [datos, setDatos] = useState({
        nombre: '',
        telefono: 0,
        email: '',
        cart: cartContext,
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
        validarDatos(event.target)
    }
    function validarDatos(e) {
        if (e.value !== '')
            if (e.name === 'email2' && e.value === datos.email) {
                setValidado(true)
                return (true)
            }
        setValidado(false)
    }
    const active = () => {
        cartContext.clear()
        firebaseContext.createOrder(datos)
        firebaseContext.actualizarStock(datos.cart)
    }
    return (
        <div className='checkoutContainer'>
            <div className='CheckoutTitulo'><h3>Checkout</h3></div>
            <div className='checkoutItemList'>
                {cartContext.cart.map((item, index) => (
                    <CheckoutItem key={index} item={item} />
                ))}
            </div>
            <form className='checkoutForm'>
                <h3>Datos de Contacto</h3>
                <label htmlFor="nombre">Nombre y apellido</label>
                <input type="text" onChange={handleInputChange} name="nombre"></input>
                <label htmlFor="nombre">Telefono</label>
                <input type="number" onChange={handleInputChange} name="telefono"></input>
                <label htmlFor="nombre">Email</label>
                <input type="email" onChange={handleInputChange} name="email"></input>
                <label htmlFor="nombre">Repite el Email</label>
                <input type="text" onChange={handleInputChange} name="email2"></input>
                <h3>TOTAL $ {cartContext.PrecioTotal()}</h3>
                <NavLink className={validado ? 'cartButton' : 'noButton'} to='/finish' onClick={() => active()} > Comprar </NavLink>
            </form>
        </div >
    )
}

export default Checkout;


