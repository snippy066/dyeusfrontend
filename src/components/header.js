import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <div className=''>
            <div className='flex justify-between pt-1 pb-6 items-center'>
           <FontAwesomeIcon icon={faBars} />
           <FontAwesomeIcon icon={faCartShopping} /></div>
           <div className='w-full h-.25 bg-white'></div>
        </div>
    )
}

export default Header
