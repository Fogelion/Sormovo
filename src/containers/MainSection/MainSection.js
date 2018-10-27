import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './MainSection.css';
import Buildings from "../../components/Pages/Buildings/Buildings";



export default class MainSection extends Component {
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
					{/*<Route exact path='/' component={Buildings}/>*/}
				</Switch>
			</main>
		);
	}
}