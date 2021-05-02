import React, { useContext } from 'react';
import FirebaseContext from '../../context/FirebaseContext'
import { NavLink } from 'react-router-dom';
import '../../styles/Finish.css'

const Finish = (propr) => {
    const firebaseContext = useContext(FirebaseContext);
 
    return (
        <div className='finish'>
              <i className="fas fa-shipping-fast"></i>
                <h3>Tu compra fue registrado con el numero:</h3>
                <h4>{firebaseContext.lastId}</h4>
            <NavLink className='cartButton' to='/' >Volver a la tienda</NavLink>
        </div>
    )
}

export default Finish;