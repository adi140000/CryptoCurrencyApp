import React, { Component } from 'react';
import Currencies from './currencies/Currencies'

class Main extends Component {
    state = {  }
    render() { 
        return (
            <main className='main'>
                 <Currencies/>
            </main>
         );
    }
}
 
export default Main;