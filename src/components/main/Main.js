import React from 'react';
import Currencies from './currencies/Currencies';
import Page from './page/Page';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Main = () => {
    return (
       <main className='main'>
            <Router>
                <Switch>                                              
                    <Route path='/page/:id' component={Page} />
                    <Route path='/' component={Currencies}/>  
                </Switch>
            </Router>

    </main>  );
}
 


export default Main;