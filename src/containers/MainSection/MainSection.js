import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './MainSection.css';
import UnionRoute from '../../components/UnionRoute.js';
import Home from '../../components/Home/Home.js';
import Geography from '../../components/Geography/Geography.js';
import History from '../../components/History/History.js';
import Buildings from '../../components/Buildings/Buildings.js';
import Achievements from '../../components/Achievements/Achievements.js';
import Personalities from '../../components/Personalities/Personalities.js';
import Monuments from '../../components/Monuments/Monuments.js';
import Churches from '../../components/Churches/Churches.js';
import Schools from '../../components/Schools/Schools.js';
import Photos from '../../components/Photos/Photos.js';
import Authors from '../../components/Authors/Authors.js';
import PersonalInfo from '../../components/Personalities/PersonalInfo.js';

class MainSection extends Component {
	// state = {
	// 	isOpen: true
	// };
	render() {
		// console.dir(this.props.navPoints[5].componentName.type);
		// console.dir(Personalities);
		const NavRoute = this.props.navPoints.map((elem) => {
			// let exact = elem.route === '/';
			let UniPath =
				<Route exact path={`${elem.route}`} component={elem.componentName.type} key={elem.id} />;
			// let divdiv = <div></div>;
			// UniPath += <Switch/>;
			// return <Route exact path={`${elem.route}`} component={elem.componentName.type} key={elem.id} />

			return UniPath;



			// return <Route path={`${elem.route}`} component={UnionRoute} key={elem.id} exact={exact}/>
		});

		return (
				<main className="MainBody">
					{NavRoute}

					{/*<Route exact path="/" component={Home} />*/}
						{/*<Route path="/geography" component={Geography} />*/}
						{/*<Route path="/history" component={History} />*/}
						{/*<Route path="/buildings" component={Buildings} />*/}
						{/*<Route path="/achievements" component={Achievements} />*/}
						{/*<Route path="/personalities" component={Personalities} />*/}
						{/*<Route path="/monuments" component={Monuments} />*/}
						{/*<Route path="/churches" component={Churches} />*/}
						{/*<Route path="/schools" component={Schools} />*/}
						{/*<Route path="/photos" component={Photos} />*/}
						{/*<Route path="/authors" component={Authors} />*/}





				</main>
		);
	}

}

export default MainSection;