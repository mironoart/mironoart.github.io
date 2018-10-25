import React from 'react';
import me from '../images/me.jpg';

const Projects = () => (
    
    <div className= "projects-container">

        <div className = "projects-few-words"> 
           <p> Hi! Welcome to my portfolio site. Follow next to learn more abou me </p>
        </div>

        <div className="projects-content">

            <div className="project">
                <div className = "project-image">
                    <img src={me} alt=""/>
                </div>
                
                <p>
                    Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself 
                </p>
            </div>

            <div className="project">
                <div className = "project-image">
                    <img src={me} alt=""/>
                </div>
                <p>
                    Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself 
                </p>
            </div>

            <div className="project">
                <div className = "project-image">
                    <img src={me} alt=""/>
                </div>
                <p>
                    Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself 
                </p>
            </div>

            <div>
                <div className = "project-image">
                    <img src={me} alt=""/>
                </div>
                <p>
                    Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself Let me introduce myself 
                </p>
            </div>

        </div>
    </div>  
    
      
)

export default Projects;