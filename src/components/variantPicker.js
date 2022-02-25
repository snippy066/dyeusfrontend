import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CurrencyCurrent from "./currencyCurrent";

function VariantPicker(props) {

  const[select,setselect]=useState(false);
 
  function clickUpdate(){
    setselect(!select);
  }

  return (
    <div className="flex items-center font-custfont -mr-4 pb-6" onClick={clickUpdate}>
  <div className={`rounded-lg p-3 font-sans text-sm font-semibold w-11/12  
  ${select?"bg-black_sh1 border-white border-2":"bg-black_sh"}`}>
    
      <div className={`bg-blue-600 rounded-xl flex text-xxs p-1 px-2 justify-center w-fit gap-1 ${props.val?'hidden':'block'}`}>
        <FontAwesomeIcon icon={faStar} className="h-1.5 mt-0.5" />
        <div>MOST POPULAR</div>
        <FontAwesomeIcon icon={faStar} className="h-1.5 mt-0.5" />
      </div>
      <div className="text-lg font-custfont font-semibold mt-1">
        {props.count[0]} Months Pack ({props.count[1]} tubes)
      </div>
      <div className={`flex justify-between text-xs p-1 ${select?"text-back_blue":" text-slate-500"}`}>
        <div>
          Savings :
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          100
        </div>
        <div className="-mt-3 font-bold text-base">
          <CurrencyCurrent text={props.count[2]} color={false} strike={false} />
          <CurrencyCurrent text={props.count[3]} color={true} strike={true} className={`${props.val?" text-black_sh":"text-slate-500"}`}/>
        </div>
      </div>
      <div className="flex gap-6 text-green-600 -mt-1">
        12% Saved 
        <div className={`text-yellow_sh ${props.val?'hidden':'block'}`}>Best Result</div>
      </div>
    </div>

    <div className={`${select?'block':'hidden'}`}><FontAwesomeIcon icon={faCheck} className="h-6 w-6 ml-3"/></div>
    </div>
  );
}

export default VariantPicker;
