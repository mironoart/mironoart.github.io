import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contacts extends Component {
    render() {
        return (
            <div className = "contact-body">
               <Grid className = "contact-grid">
                  <Cell col = {6}> 
							<h2> Andry Mironov </h2>
							<img 
									src = "http://i.pravatar.cc/300"
									alt = "avatar"
									style = {{ height: '200px' }}   
							/>
							<p style = {{ width: "75%", margin: "auto", paddingTop: "1em" }}>
							Some Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERESome Text HERE
							</p>
                  </Cell>

						<Cell col = {6}> 
							<h2> Contact me </h2>
							<hr/>

							<div className = "contact-list">

								<List>
									<ListItem>
										<ListItemContent style = {{ fontSize: '25px', fontFamily: 'Andton'}}>
											Bryan Cranston
										</ListItemContent>
									</ListItem>

									<ListItem>
										<ListItemContent icon="person">Aaron Paul</ListItemContent>
									</ListItem>

									<ListItem>
										<ListItemContent icon="person">Bob Odenkirk</ListItemContent>
									</ListItem>
								</List>
							</div>
						</Cell>
					</Grid>
            </div>
        )
    }
}

export default Contacts;