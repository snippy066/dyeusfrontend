import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

function CurrencyCurrent(props) {
    return (
        <div className="font-bold flex gap-5">
        <div>
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          {props.text}
        </div>
        </div>
    )
}

export default CurrencyCurrent
