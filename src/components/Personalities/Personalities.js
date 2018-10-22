import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PersExamp from './PersExamp.js';
import PersonalInfo from "./PersonalInfo";
// import PersonalInfo from './PersonalInfo.js';





export default function Personalities({ match }) {
	return (
		<div>
			<h1>Personalities</h1>
			<Switch>
				<Route exact path="/personalities" component={PersonalitiesFull} />
				<Route path="/personalities/:pers" component={PersonalInfo} />
			</Switch>
		</div>
	);
}

function PersonalitiesFull({ match }) {
	const PersListing = PersExamp.map((elem) => {
		let formatDate = elem.date.getFullYear() + '-' + elem.date.getMonth() + '-' + elem.date.getDate();
		return <section className='persShort' key={elem.id}>
			<Link to={`${match.url}/${elem.id}/`}>{elem.title}</Link>

			<time dateTime={formatDate}>{formatDate}</time>
		</section>
	});
	return (
		<div>
			{/*<h1>Personalities</h1>*/}
			<div className="persShortList">
				{PersListing}
			</div>
		</div>
	);
}

