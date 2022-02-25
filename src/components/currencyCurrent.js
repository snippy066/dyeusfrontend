import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

function CurrencyCurrent(props) {
  const color=props.color;
  const strike=props.strike;
    return (
        <div className={`font-bold flex gap-5 ${color?"text-cust_text":"text-white"} ${strike ? 
        "line-through":""}`}>
        <div>
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          {props.text}
        </div>
        </div>
    )
}

export default CurrencyCurrent
