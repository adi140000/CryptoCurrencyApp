import React from 'react';
import './Refresh.scss';
import {MdReplay} from "react-icons/md";


const Refresh = () => {
    return (
        <div className='refresh'>
            <MdReplay className='refresh__icon' />
        </div>
    );
}

export default Refresh;