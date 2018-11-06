import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './MainSection.css';
import './ArticleContent.css';
// import Buildings from "../../components/Pages/Buildings/Buildings";
import MainSectionHeader from "../MainSectionHeader/MainSectionHeader";



export default class MainSection extends Component {
	render() {
		const NavRoute = this.props.navPoints.map((elem) => {
			const MediumComp = (props) => <elem.componentName.type {...props} test=""/>;
			const Path = <Route exact path={`${elem.route}`} render={MediumComp} key={elem.id}/>;
			// console.log(Path);
			return Path;
		});
		return (
			<main className="MainBody">
				<MainSectionHeader/>
				<Switch>
					{NavRoute}
				</Switch>
			</main>
		);
	}
}