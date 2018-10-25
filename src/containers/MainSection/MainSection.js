import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './MainSection.css';
import NotFound from '../../components/NotFound/NotFound.js';

export default class MainSection extends Component {
	// state = {
	// 	isOpen: true
	// };
	render() {
		const NavRoute = this.props.navPoints.map((elem) => {
			let UniPath =
				<Route exact path={`${elem.route}`} component={elem.componentName.type} key={elem.id} />;
			return UniPath;
		});

		return (
			<main className="MainBody">
				<Switch>
					{NavRoute}
					<Route path='*' component={NotFound} />
				</Switch>
						{/*<Route path="/geography" component={Geography} />*/}
			</main>
		);
	}

}