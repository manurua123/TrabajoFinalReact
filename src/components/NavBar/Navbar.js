import React, { useContext, useEffect, useState } from 'react';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import '../../styles/Navbar.css'
import FirebaseContext from '../../context/FirebaseContext'


const Navbar = () => {
    const context = useContext(FirebaseContext);
    const [state, setState] = useState(false);
    const [categorias, setCategorias] = useState([])

    function handleClick() {
        setState(!state)
    }

    const cats = async()=>{
        const resp = await context.getCategorias()
        setCategorias(resp)
    }
    useEffect(()=>{
        cats();
    },[])

    return (
        <nav className="NavbarItems">
            <NavLink to='/'> <h1 className="navbar-logo">Curso React<i className="fab fa-react"></i></h1></NavLink>
            <div className="menu-icon" onClick={() => handleClick()}>
                <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={state ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <DropdownButton id="dropdown-basic-button" title="Categorias">
                        {categorias.map((i,index)=>
                             <Dropdown.Item key={index}><NavLink to={ `/category/${i}`}><p className='nav-links'>{i}</p></NavLink> </Dropdown.Item>
                        )}
                    </DropdownButton>
                </li>
                <li ><NavLink to="/cart"><CartWidget /></NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar