import React, { useContext } from 'react';
import CartContext from '../../context/CartContext'
import '../../styles/CartWidget.css'

function CartWidget() {
    const context = useContext(CartContext);

    function cantElementos() {
        var total = 0.
        context.cart.map((i) => {
            total = total + (i[1]);
        })
        return total;
    }

    return (
        <div className='CartWidget'>
            <i className="fas fa-dolly nav-links"></i>
            {cantElementos() !== 0 ? <p>{cantElementos()}</p> : null}
        </div>
    )
}
export default CartWidget;