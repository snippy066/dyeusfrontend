import React from "react";
import Rating from "./rating";
import productpic from '../images/book_pro.jpg';
import CurrencyCurrent from "./currencyCurrent";
import VariantPicker from "./variantPicker";
import Cart from "./cart";



function Body() {
  return (
    <div className="h-full md:h-auto bg-back_blue">
      <img src={productpic} alt="product_picture" />
      <div className="text-3xl font-semibold font-custfont mt-16 pb-4">
        Everyday rinse and reload
      </div>
      <div className="font-custfont2 text-sm text-slate-300 pb-4 ">
        Achieve your dream skin goal with this complete package of skincare
        produts that will rejuvenate your day.
      </div>
      <div class="flex items-center pb-8">
      <Rating /></div>

    <div className="text-3xl flex gap-8 pb-6">
      <CurrencyCurrent text="899" color={false} strike={false}/>   
      <CurrencyCurrent text="1299" color={true} strike={true}/>
      </div>

      <div >
          <VariantPicker val={false} count={[1,4,595,795]}/>
          <VariantPicker val={true} count={[3,12,899,999]}/>
          
      </div>
      <div className="pb-72">
        <Cart/>
      </div>
    </div>
  );
}

export default Body;
