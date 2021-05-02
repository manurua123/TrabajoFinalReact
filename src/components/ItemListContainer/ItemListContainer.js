import React, { useContext, useEffect,useState } from 'react';
import '../../styles/ItemsListContainer.css';
import ItemList from "../ItemsList/ItemList"
import { useParams, } from "react-router-dom";
import FirebaseContext from '../../context/FirebaseContext'

const ItemsListContainer = (props) => {
    const context = useContext(FirebaseContext);
    const [productos, setProductos] = useState([])
    const { id } = useParams();

    const prod = async()=>{
        const resp = await context.getAll()
        setProductos(resp)
    }
    useEffect(()=>{
        prod();
    },[])

    return (
        <div className='ItemsListContainer'>
            {id? <h3>{id}</h3> : <h3>Items</h3>}
            <ItemList items={(id ? (productos.filter(i=>i.category===id)) : productos)} />
        </div>
    )
}

export default ItemsListContainer
