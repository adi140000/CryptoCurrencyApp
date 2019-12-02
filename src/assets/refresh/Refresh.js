import React from 'react';
import './Refresh.scss';
import { MdReplay } from "react-icons/md";


const Refresh = (props) => {

    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const time=`${hour<10?'0'+hour:hour} : ${minute<10?'0'+minute:minute}`
    const { getDate, url } = props

    return (
        <div className='refresh'>
            <button onClick={() => getDate(url)} className='refresh__box'>
                <MdReplay className='refresh__box__icon' />
            </button>
            <div className='refresh__watch'>{time}</div>
        </div>

    );
}

export default Refresh;