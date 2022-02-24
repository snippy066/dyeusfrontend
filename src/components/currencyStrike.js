import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

function Currency(props) {
    return (
        <div className=" text-cust_text line-through">
            <FontAwesomeIcon icon={faIndianRupeeSign} />
            {props.text}
        </div>
    );
}

export default Currency
