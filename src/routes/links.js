import React from 'react';
import {Link} from 'react-router-dom';



const Links = ()=>(
    <ul className='nav'> 
        <li className='lin'><Link to='/'>Home</Link></li>
        <li className='lin'><Link to='/DigitalClock'>DigitalClock</Link></li>
        <li className='lin'><Link to='/CounterApp'>CounterApp</Link></li>
        <li className='lin'><Link to='/UserAns'>UserAns</Link></li>
        <li className='lin'><Link to='/TodoItem'>TodoItem</Link></li>
    </ul>
)
export default Links;