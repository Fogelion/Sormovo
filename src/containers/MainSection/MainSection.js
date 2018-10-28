import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './MainSection.css';
import Buildings from "../../components/Pages/Buildings/Buildings";
import MainSectionHeader from "../MainSectionHeader/MainSectionHeader";



export default class MainSection extends Component {
	render() {
		const NavRoute = this.props.navPoints.map((elem) => {
			return <Route exact path={`${elem.route}`} component={elem.componentName.type} key={elem.id} />;
		});

		return (
			<main className="MainBody">
				<MainSectionHeader/>
				<Switch>
					{NavRoute}
					{/*<Route exact path='/' component={Buildings}/>*/}
				</Switch>
			</main>
		);
	}
}