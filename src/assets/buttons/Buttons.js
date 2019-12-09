import React from 'react';
import '../../css/Buttons.scss';
import {Link} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdReplay } from "react-icons/md";


const Refresh = (props) => {

    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const time=`${hour<10?'0'+hour:hour} : ${minute<10?'0'+minute:minute}`
    const { getDate, url, main } = props


    return (
        <div className='buttons'>         
           {main?<Link to="/" className='buttons__box'>
                <IoIosArrowBack className='buttons__box__icon'/>
            </Link>:''}
             
            <button onClick={() => getDate(url)} className='buttons__box'>
                <MdReplay className='buttons__box__icon' />
            </button>           
            <div className='buttons__watch'>{time}</div>
        </div>

    );
}

export default Refresh;