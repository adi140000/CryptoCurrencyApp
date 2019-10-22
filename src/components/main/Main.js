import React, { Component } from 'react';
import Currencies from './currencies/Currencies';
import Page from './page/Page';
import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";

class Main extends Component {
    state = {  }
    render() { 
        return (
            <main className='main'>
                <Router>
                    <Switch>                         
                        <Route   path='/page/:id'>
                             <Page/>
                        </Route>
                        <Route  path='/'>
                             <Currencies/>
                        </Route>
                    </Switch>
                </Router>
                 
            </main>
         );
    }
}
 
export default Main;