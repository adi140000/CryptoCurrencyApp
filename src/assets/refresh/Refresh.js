import React from 'react';
import './Refresh.scss';
import {MdReplay} from "react-icons/md";


const Refresh = (props) => {
    const { getDate, url }=props
    return (
        <button onClick={()=>getDate(url)}  className='refresh'>
            <MdReplay  className='refresh__icon' />
        </button>
    );
}

export default Refresh;