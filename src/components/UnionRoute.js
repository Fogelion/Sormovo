import React from 'react';
import { Route, Switch } from 'react-router-dom';
import navPoints from "../containers/NavBar/navPoints";
import Personalities from "./Personalities/Personalities.js";
import PersonalInfo from "./Personalities/PersonalInfo.js";
import PersonalTest from "./Personalities/PersonalTest.js";




export default function UnionRoute({ match }) {
	console.log(match);
	let subRoutes = match.path.split('/').slice(1).map((elem) => '/' + elem);
	let checkPath = '';
	// let curPage = [];
	// let prevPage =[];
	let stagePage = [];
	let tempPage = [...navPoints];
	for (let i = 0; i < subRoutes.length; i++) {
		checkPath += subRoutes[i];
		if (i > 0) {
			tempPage = tempPage.sub;
		}
		tempPage = tempPage.find(page => page.route === checkPath);
		stagePage.push(tempPage);
	}
	// console.log(stagePage);
	const UnionRoutes = stagePage.map((elem) => {
		// console.log(elem);
		return <Route exact path={elem.route} component={elem.componentName.type} key={elem.id}/>;
	});

	// if (stagePage.length >= 2) {
	// 	curPage = stagePage[stagePage.length-1];
	// 	prevPage = stagePage[stagePage.length-2];
	// } else {
	// 	curPage = stagePage[0];
	// 	prevPage = stagePage[0];
	// }

	// const UnionPrevRoutes =
	// 	<Route exact path={prevPage.route} component={prevPage.componentName.type} />;
	// const UnionRoutes =
	// 	<Route path={curPage.route} component={curPage.componentName.type} />;
	// console.log(UnionPrevRoutes);
	// console.log(UnionRoutes);

	return (

		<div>
			<h1>{stagePage[stagePage.length-1].name}</h1>
			{/*<Switch>*/}
				<Route exact path="/personalities" component={Personalities} />
				<Route exact path="/personalities/:pers" component={PersonalInfo} />
				<Route exact path="/personalities/:pers/:test" component={PersonalTest} />
				{/*{UnionPrevRoutes}*/}
				{/*{UnionRoutes}*/}

			{/*</Switch>*/}
		</div>
	);
}
