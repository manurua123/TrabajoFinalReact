import React from 'react';
import '../../styles/ItemCart.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react';
//test git

function Item(props) {
    const context = useContext(CartContext);
    return (
        <div className="ItemCart">
            <ul className='ItemCartDetail' >
                <li className="imagen">
                    <i className={props.item[0].img}></i>
                </li>
                <li className="titulo">{props.item[0].title} <br />
                    <p>{props.item[0].description}</p> </li>
                <li className='cantidad' >Cantidad: <br />{props.item[1]}</li>
                <li className='cantidad' >Precio: <br />${props.item[0].price * props.item[1]}</li>
                <button className='cartButton' onClick={() => context.removeItem(props.item[0].title)}><i className="far fa-trash-alt"></i> Quitar</button>
            </ul>
        </div>

    )
}

export default Item;