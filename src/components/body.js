import React from "react";
import Rating from "./rating";
import productpic from '../images/book_pro.jpg';
import Currency from "./currencyStrike";
import CurrencyCurrent from "./currencyCurrent";
import VariantPicker from "./variantPicker";



function Body() {
  return (
    <div className="h-screen md:h-auto bg-back_blue">
      <img src={productpic} alt="product_picture" />
      <div className="text-4xl font-medium font-custfont">
        Everyday rinse and reload
      </div>
      <div className="font-custfont text-sm ">
        Achieve your dream skin goal with this complete package of skincare
        produts that will rejuvenate your day.
      </div>
      <Rating />

    <div className="text-3xl flex gap-8">
      <CurrencyCurrent text="899"/>   
      <Currency text="1299" />
      </div>

      <div>
          <VariantPicker/>
      </div>
    </div>
  );
}

export default Body;
