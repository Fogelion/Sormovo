import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './MainSection.css';


import createHistory from 'history/createBrowserHistory';
// const history = createHistory();
// console.log(history);

export default class MainSection extends Component {
	componentDidUpdate () {
		// console.log('history = ');
		console.log(createHistory().location.pathname);
	}
	render() {
		const NavRoute = this.props.navPoints.map((elem) => {
			// let UniPath =
			// 	<Route exact path={`${elem.route}`} component={elem.componentName.type} key={elem.id} />;
			return <Route exact path={`${elem.route}`} component={elem.componentName.type} key={elem.id} />;
		});

		return (
			<main className="MainBody">
				<Switch>
					{NavRoute}
				</Switch>
			</main>
		);
	}
}