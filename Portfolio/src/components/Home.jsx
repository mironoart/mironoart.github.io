import React from 'react';
import { Link } from 'react-router-dom';
import me from '../images/me.jpg'

const Home = () => (
    <div className= "home-container">

        <div className="home-content">

            <div className="home-description">
                <h1>Hello! </h1>
                <h2>
                    My name is Andry.
                    I'm a web designer currently studying a master degree in Digital and Interaction Design at Milan, Italy.
                </h2>
                <p>
                    I feel passionate about intuitive products and meticulous visual interfaces. I like to analyze users context and behaviours in order to create the best solutions to every project. I have also worked as front-end developer in some projects, specially taking care of the styles applying and the integration with interactive plug-ins.
                </p>
                <p>
                    When I'm not designing or thinking in design, you can surelly find me playing football, sitting in a movie theater or watching a tv show on netflix.
                </p>
                <p>
                    If you have a project, or just want to say hi please write me at 
                </p>
                
            </div>

            <div className = "home-nav"> 
                
                    <div id = "home-about"> 
                        <img src={me} alt=""/>
                         <span><Link to="/Aboutme"> About -> </Link></span> 
                        <div class = "home-text-container">
                            <div class = "home-left"> Let me just </div>
                            <div class = "home-right"><Link to="/Aboutme"> ...introduce myself </Link> </div>
                        </div>
                        
                    </div>
                    <div id = "home-projects"> 
                         <img src={me} alt=""/>
                        <span><Link to="/Projects"> Projects -> </Link></span>
                        <div class = "home-text-container">
                            <div class = "home-left"> Take a look </div>
                            <div class = "home-right"><Link to="/Projects"> ...into my masterpiece </Link> </div>
                        </div>
                    </div>
                    <div id = "home-contacts">
                        <img src={me} alt=""/>      
                        <span><Link to="/Contacts"> Contacts -> </Link></span>
                        <div class = "home-text-container">
                            <div class = "home-left"> If you ever </div>
                            <div class = "home-right"><Link to="/Contacts"> ...need me </Link> </div>
                        </div>
                    </div>
                
            </div>

        </div>

    </div>  
)

export default Home;