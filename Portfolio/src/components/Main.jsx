import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contacts';
import logo from '../images/logo.gif';

const merits = {
    WebDev: 'Web-Developer',
    Engineer:'Engineer',
    Discoverer: 'Discoverer',
    Learner:  'Learner'
}

const Main = () => (

    <div className = "wrapper"> 
        
        <div className="top-nav">

            <div className = 'logo'>
               <Link to="/Home"> <img src={logo} alt=""/> </Link>
            </div>
            
            <div className="top-nav-rigth">
                <Link to="/Home"> Home </Link>
                <Link to="/Aboutme"> About </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/Contacts"> Contacts </Link>
            </div>
        </div>
        
        <div className="container">
            <Switch>
                <Route path = "/Home" render={(props) => <Home {...props}  />} />
                <Route path = "/Aboutme" render={(props) => <About {...props} merit = {merits} />} />
                <Route path = "/Projects" render={(props) => <Projects {...props}  />} />
                <Route path = "/Contacts" render={(props) => <Contact {...props}  />} />
            </Switch>
        </div>

        
        
    </div>
)
export default Main;