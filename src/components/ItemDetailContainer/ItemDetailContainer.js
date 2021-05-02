import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, } from "react-router-dom";
import FirebaseContext from '../../context/FirebaseContext'
import { NavLink } from 'react-router-dom';
const ItemDetailContainer = () => {
  const { id } = useParams();
  const context = useContext(FirebaseContext);
  const [producto, setProducto] = useState()

  const prod = async () => {
    const resp = await context.getById(id)
    setProducto(resp)
  }
  useEffect(() => {
    prod();
  }, [id])
  const NoHayCosas = () => {
    return (
      <div className='noCart'>
        <i className="fas fa-ghost"></i>
        <h3>ITEM NO ENCONTRADO</h3>
        <NavLink className='cartButton' to='/' >Ver Productos</NavLink>
      </div>
    )
  }
  return (
    <div >
      { producto ? 
        <ItemDetail item={producto} /> 
      : <NoHayCosas/>}
    </div>
  )
}
export default ItemDetailContainer;

