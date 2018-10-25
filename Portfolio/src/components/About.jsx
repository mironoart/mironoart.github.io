	import React from "react";
	import powerPlant from '../images/powerPlant.png'
	import webDev from '../images/webDev.png'
	import discoverer from '../images/discoverer.png'
	import learner from '../images/learner.png'
	import glow from '../images/glow.png'
	

	class About extends React.Component  {
		state = {
			paragraph: 'You vexed shy mirth now noise. Talked him people valley add use her depend letter. Allowance too applauded now way something recommend. Mrs age men and trees jokes fancy. Gay pretended engrossed eagerness continued ten. Admitting day him contained unfeeling attention mrs out.',
			image:webDev,
			WebDeveloper:{
				display:"block",
				width:"85%",	
			},
		}
	
		

	//* Функция будет возвращать контент в зависимости от нажатой ссылки в суб-меню */
	changeContent = (navValue) => {
			this.setState({
				WebDeveloper:{
					display:"none",	
				},
				Engineer:{
					display:"none",	
				},
				Discoverer:{
					display:"none",	
				},
				Learner:{
					display:"none",	
				},
			})
			
			switch (navValue) {
				
				case "Web-Developer":
					this.setState({
						paragraph: "You vexed shy mirth now noise. Talked him people valley add use her depend letter. Allowance too applauded now way something recommend. Mrs age men and trees jokes fancy. Gay pretended engrossed eagerness continued ten. Admitting day him contained unfeeling attention mrs out.",
						image:webDev,
						
					}) 
					setTimeout( () => {
							this.setState({
							WebDeveloper:{
								display:"block",
								width:"85%",	
							}
							})}, 1000);
				break;
				case "Engineer":
					this.setState({
						paragraph: "By impossible of in difficulty discovered celebrated ye. Justice joy manners boy met resolve produce. Bed head loud next plan rent had easy add him. As earnestly shameless elsewhere defective estimable fulfilled of. Esteem my advice it an excuse enable. Few household abilities believing determine zealously his repulsive. To open draw dear be by side like.Exquisite cordially mr happiness of neglected distrusts.",
						image:powerPlant,
						
					}) 

					setTimeout( () => {
						this.setState({
							Engineer:{
							display:"block",
								
						}
						})}, 1000);
				break;
				case "Discoverer":
					this.setState({
						paragraph: "Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable.",
						image:discoverer,
						
					}) 
					setTimeout( () => {
						this.setState({
							Discoverer:{
							display:"block",	
						}
						})}, 1000);
				break;
				case "Learner":
					this.setState({
						paragraph: "Far quitting dwelling graceful the likewise received building. An fact so to that show am shed sold cold. Unaffected remarkably get yet introduced excellence terminated led. Result either design saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond she. ",
						image:learner,
						
					}) 
					setTimeout( () => {
						this.setState({
						Learner:{
							display:"block",	
						}
						})}, 1000);
				break;
				default: return this.state;

		}
		
		};
		
		
	
	render(){
		const WebDev = this.props.merit.WebDev;
		const Engineer = this.props.merit.Engineer;
		const Discoverer = this.props.merit.Discoverer;
		const Learner = this.props.merit.Learner;
		
		
		return(
			<div className = "about-container">
				<div className = "about-few-worlds"> 
					Well it want take that much time. Have a mice tour: 
				</div>

				<div className = "about-list"> 
					<ul>
						<li onClick = {() => this.changeContent(WebDev)}> 
							{this.props.merit.WebDev}
							<div className = "about-list-image" style = {this.state.WebDeveloper}> 
								<img src={glow} alt=""/>
							</div>
						</li> 

						<li onClick = {() => this.changeContent(Engineer)}> 
							{this.props.merit.Engineer}
							<div className = "about-list-image" style = {this.state.Engineer}> 
								<img src={glow} alt=""/>
							</div>
						</li> 

						<li onClick = {() => this.changeContent(Discoverer)}>
							{this.props.merit.Discoverer}
							<div className = "about-list-image" style = {this.state.Discoverer}> 
								<img src={glow} alt=""/>
							</div>
						</li> 

						<li onClick = {() => this.changeContent(Learner)}> 
							{this.props.merit.Learner}
							<div className = "about-list-image" style = {this.state.Learner}> 
								<img src={glow} alt=""/>
							</div>
						</li>
					</ul>

				</div>
				<div className="about-content">
				
					<div className="about-image">
						<img src={this.state.image} />
					</div>

					<div className = "paragraph">
						<p>{this.state.paragraph}</p>
					</div>

				</div>

			</div>
			 
			
		)
	}
	}




	export default About;