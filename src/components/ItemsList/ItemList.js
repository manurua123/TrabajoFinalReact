import React from 'react';
import Item from "./Item";
import '../../styles/ItemList.css'

const ItemList = (props) => {
  return(
    <ul className='listaProductos'>
      {props.items.map((item,index) => (
        <Item key={index} item={item} />
      ))}
    </ul>

  )};

export default ItemList;