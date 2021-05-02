import React, { useState } from 'react';
import CartContext from '../../context/CartContext'


function CartProvider(props) {

    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCatidad] = useState(0)

    const addItem = (item, cant) => {
        if (carrito.length === 0) {
            carrito.push([item, cant])
        }
        else {
            if (!isInCart(item.title)) {
                carrito.push([item, cant])
            }
            else {
                addCant(item, cant)
            }
        }
        cantidadTotal();
    }

    const isInCart = (valor) => {
        let ok = carrito.find(i => i[0].title === valor);
        if (ok)
            return true
        return false
    }

    const addCant = (item, cant) => {
        carrito.map((i) => {
            if (i[0] === item)
                i[1] = i[1] + cant
        })
    }

    const removeItem = (valor) => {
        setCarrito(carrito.filter(item => item[0].title !== valor));
    }

    const clear = () => {
        setCarrito([])
    }

    const cantidadTotal = () => {
        setCatidad(carrito.reduce((prev, next) => prev + next[1], 0))
    }
  
    function PrecioTotal() {
        var total = 0.
        carrito.map((i) => {
            total = total + (i[0].price * i[1]);
        })
        return total;
    }

    
    const { children } = props;
    return (
        <CartContext.Provider value={{
            cart: carrito,
            cantidad: cantidad,
            addItem: addItem,
            removeItem: removeItem,
            clear: clear,
            isInCart: isInCart,
            CantidadTotal: cantidadTotal,
            PrecioTotal: PrecioTotal,
           
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
