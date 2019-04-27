import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import DigitalClock from '../digitalclock/Clock';
import CounterApp from '../counterApp/counter';
import UserAns from '../user';
import TodoItem from '../todoApp/practice';
import Links from './links';

const Nav = ()=> (
    <Router>      
        <div>
            <Links />
            <Route path='/' component={App} />
            <Route path='/DigitalClock' component={DigitalClock} />
            <Route path='/CounterApp' component={CounterApp} />
            <Route path='/UserAns' component={UserAns} />
            <Route path='/TodoItem' component={TodoItem} />

        </div>
    </Router>
)
export default Nav;