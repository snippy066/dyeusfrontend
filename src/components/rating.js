import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Rating() {
    return (
        <div className="flex gap-4 font-semibold">
        <div className="flex bg-green-600 w-fit p-1.5 px-2 rounded-3xl items-center gap-0.5">
          <FontAwesomeIcon icon={faStar} className="h-2.5" />
          <FontAwesomeIcon icon={faStar} className="h-2.5" />
          <FontAwesomeIcon icon={faStar} className="h-2.5" />
          <FontAwesomeIcon icon={faStar} className="h-2.5" />
          <FontAwesomeIcon icon={faStarHalfStroke} className="h-2.5" />
        </div>
        <div className="h-3 font-custfont3">4.5</div>
        <div className="text-cust_text text-xs font-custfont flex gap-3">
          Click to read reviews
          <div className="">
            <FontAwesomeIcon icon={faChevronRight} className="h-2.5" />
          </div>
        </div>
      </div>
    )
}

export default Rating
