import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

export let text;

const Currency=(props)=> {
    return (
        <div className=" text-cust_text line-through">
        <FontAwesomeIcon icon={faIndianRupeeSign} />
        1299
        <div>{props.text}</div>
      </div>
    );
}

export default Currency
