import React from 'react';
import '../../styles/ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount"
import { NavLink } from 'react-router-dom';

const ItemDetail = (props) => {

  const NoHayCosas = () => {
    return (
      <div className='noCart'>
        <i className="fas fa-ghost"></i>
        <h3>ITEM NO ENCONTRADO</h3>
        <NavLink className='cartButton' to='/' >Ver Productos</NavLink>
      </div>
    )
  }
  const HayCosas = () => {
    return(
    <ul className="producto">
      <li className="titulo">{props.item.title}</li>
      <li className="imagen">
        <i className={props.item.img}></i>
      </li>
      <li className='descripcion'>{props.item.description}</li>
      <li className="precio">Precio: ${props.item.price}</li>
      <ItemCount item={props.item} />
    </ul>
    )
  }

  return (
    <>
      { (props.item ===  null ? <NoHayCosas /> : <HayCosas />)}
    </>
  )
}


export default ItemDetail;