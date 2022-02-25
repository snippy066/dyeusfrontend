import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CurrencyCurrent from "./currencyCurrent";

function VariantPicker() {
  return (
    <div class="flex items-center -mr-4">
    <div class="bg-red-500 rounded-lg p-3 font-sans text-sm font-semibold border-white w-11/12">
      <div className=" bg-blue-600 rounded-xl flex text-xs p-1 px-2 justify-center w-fit gap-1">
        <FontAwesomeIcon icon={faStar} className="h-2.5 mt-0.5" />
        <div>MOST POPULAR</div>
        <FontAwesomeIcon icon={faStar} className="h-2.5 mt-0.5" />
      </div>
      <div className="text-lg font-custfont font-semibold">
        1 Months Pack (4 tubes)
      </div>
      <div class="flex justify-between">
        <div>
          Savings :
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          100
        </div>
        <div class="-mt-4">
          <CurrencyCurrent text="899" color={false} strike={false} />
          <CurrencyCurrent text="1299" color={true} strike={true} />
        </div>
      </div>
      <div class="flex gap-6">
        12% Saved 
        <div>Best Result</div>
      </div>
    </div>

    <div><FontAwesomeIcon icon={faCheck} className="h-6 w-6 ml-3"/></div>
    </div>
  );
}

export default VariantPicker;
