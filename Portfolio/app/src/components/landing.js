import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style = {{width: '100%', margin: 'auto' }}>
                <Grid className = "landing-grid">
                    <Cell col = {12} >

                        <img 
                            className = "avatar-img"
                            src = "http://i.pravatar.cc/300 " 
                            alt = "avatar">
                        </img>
                        <div className = "banner-text"> 

                            <h1> Full Stack Web Developer </h1>
                            <hr/>
                            <p> HTML5 | CSS3 | PHP7 | jQuery | mySQL | React</p>

                            <div className = "social-links">

                                {/* LinkedIn */}
                                <a href = "http://google.com" target = "_blank" rel = "noopener noreferrer"> 
                                    <i className = "fab fa-google-plus-g"  aria-hidden = "true"> </i> 
                                </a>

                                {/* GitHub */}
                                <a href = "http://github.com" target = "_blank" rel = "noopener noreferrer"> 
                                     <i className = "fab fa-github-square"  aria-hidden = "true"></i> 
                                </a>

                                {/* Freecodecamp */}
                                <a href = "http://linkedin.com" target = "_blank" rel = "noopener noreferrer"> 
                                    <i className = "fab fa-linkedin-in"  aria-hidden = "true" ></i> 
                                </a>
                                
                            </div>

                        </div>
                        
                   </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;