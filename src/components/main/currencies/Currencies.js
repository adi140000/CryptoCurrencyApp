import React, { Component } from 'react';
import Ranking from './ranking/Ranking'

class Currencies extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <h1 className='main__title'>Ranking Kryptowalut</h1>
                <Ranking/>               
            </>
         );
    }
}
 
export default Currencies;