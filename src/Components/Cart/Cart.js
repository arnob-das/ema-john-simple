import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    
    const totalQuantity = cart.reduce((previous, product) => previous + product.quantity, 0);

    //total price
    const totalPrice = cart.reduce((previous, product) => previous + product.price, 0)
    // for(const product of cart){
    //     totalPrice += product.price;
    // }

    return (
        <div>
            <h3>Order Summary</h3>
            <h3>Items Ordered: {totalQuantity}</h3>
            <p>Total Price: {totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default Cart;