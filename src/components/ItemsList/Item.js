import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/ItemList.css'


function Item(props) {
    
    return (
        <div className="ContenedoLink">
            <Link className="LinkProducto" to={`/item/${props.item.title}`} >
                <li className="imagen">
                 <i className={props.item.img}></i>
                </li>
                <li className="titulo "> {props.item.title}</li>
            </Link>
        </div>
    )
}

export default Item;