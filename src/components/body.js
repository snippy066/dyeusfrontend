import React from "react";
import Rating from "./rating";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

function Body() {
  return (
    <div className=" h-screen">
      <img src="../public/book_pro.jpg" alt="product_picture" />
      <div className="text-4xl font-medium font-custfont">
        Everyday rinse and reload
      </div>
      <div className="font-custfont text-sm ">
        Achieve your dream skin goal with this complete package of skincare
        produts that will rejuvenate your day.
      </div>
      <Rating />

      <div className=" text-3xl font-bold flex gap-5">
        <div>
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          899
        </div>
        <div className=" text-cust_text stroke-lime-800">
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          1299
        </div>
      </div>
    </div>
  );
}

export default Body;
