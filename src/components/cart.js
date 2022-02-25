import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

function Cart() {
    return (
        <div className="">
            <button className="w-full bg-cart_col p-3 text-sm font-semibold" >
            <FontAwesomeIcon icon={faCartShopping} />ADD TO CART</button>
        </div>
    )
}

export default Cart
