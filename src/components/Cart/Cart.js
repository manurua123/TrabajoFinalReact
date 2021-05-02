import React, { useContext } from 'react';
import CartContext from '../../context/CartContext'
import ItemCart from './ItemCart'
import { NavLink } from 'react-router-dom';
import '../../styles/ItemCart.css'

const Cart = () => {
    const context = useContext(CartContext);

    const HayCosas = () => {
        return (
            <div className='Cart'>
                <div className='tituloCarrito'>
                <h3>  Carrito  </h3>
                </div>
                <div className='CartItemList'>
                    {context.cart.map((item, index) => (
                        <ItemCart key={index} item={item} />
                    ))}
                </div>
                <ul className='botonesCarrito'>
                    <li><button className='limpiarCarro' onClick={() => context.clear()}>Eliminar todo</button> </li>
                    <li><h3 className='montoTotal'> Monto total   $ {context.PrecioTotal()} </h3></li>
                    <li><><NavLink className='cartButton terminarCompra' to='/checkout' >Terminar Compra</NavLink></></li>
                </ul>
            </div>)
    }

    const NoHayCosas = () => {
        return (
            <div className='noCart'>
                <i className="fas fa-shopping-basket"></i>
                <h3>Tu carrito esta vacio</h3>
                <NavLink className='cartButton' to='/' >Ver Productos</NavLink>
            </div>
        )
    }

    return (
        <div>
            {(context.cart.length === 0 ? <NoHayCosas /> : <HayCosas />)}
        </div>
    );
}

export default Cart;



