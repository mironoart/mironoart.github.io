import React, { Component } from 'react';


class Navigation extends Component {
    render() {
        return (
            <div className = "header">

                <div className = "logo">
                    <img 
                        src = "https://i.gifer.com/7RwC.gif"> 
                    </img>
                </div>

                <div className = "navigation">
                    <h2> About </h2>
                    <h2> Projects </h2>
                    <h2> Resume </h2>
                    <h2> Contacts </h2>
                </div>
            </div>
        )
    }
}

export default Navigation;