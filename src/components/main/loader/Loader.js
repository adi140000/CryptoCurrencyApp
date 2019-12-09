import React from 'react';
import '../../../css/Loader.scss'

const Loader = () => {
    return (<div className='conteiner'>
        <div className='conteiner__dot'></div>
        <div className='conteiner__dot'></div>
        <div className='conteiner__dot'></div>
    </div>);
}
 
export default Loader;