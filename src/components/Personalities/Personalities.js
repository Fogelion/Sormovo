import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PersExamp from './PersExamp.js';
import PersonalInfo from "./PersonalInfo";
import UnionRoute from '../UnionRoute.js';




export default function Personalities({ match }) {
	const PersListing = PersExamp.map((elem) => {
		let formatDate = elem.date.getFullYear() + '-' + elem.date.getMonth() + '-' + elem.date.getDate();
		return <section className='persShort' key={elem.id}>
			<Link to={`${match.url}/${elem.id}`}>{elem.title}</Link>

			<time dateTime={formatDate}>{formatDate}</time>
		</section>
	});
	return (
		<div>
			<h1>Personalities</h1>
			<div className="persShortList">
				{PersListing}
				{/*<Route exact path="/personalities/:pers" component={PersonalInfo} />*/}
				{/*<Route path="/personalities/:pers" component={UnionRoute} />*/}
			</div>
		</div>
	);
}






// export default function Personalities({ match }) {
// 	console.log('match = ');
// 	console.log(match);
// 	return (
// 		<div>
// 			<h1>Personalities</h1>
// 		</div>
// 	);
// }






// export default function Personalities({ match }) {
// 	console.log('match = ');
// 	console.log(match);
// 	return (
// 		<div>
// 			<h1>Personalities</h1>
// 			<Switch>
// 				<Route exact path="/personalities" component={PersonalitiesFull} />
// 				<Route path="/personalities/:pers" component={PersonalInfo} />
// 			</Switch>
// 		</div>
// 	);
// }

// function PersonalitiesFull({ match }) {
// 	const PersListing = PersExamp.map((elem) => {
// 		let formatDate = elem.date.getFullYear() + '-' + elem.date.getMonth() + '-' + elem.date.getDate();
// 		return <section className='persShort' key={elem.id}>
// 			<Link to={`${match.url}/${elem.id}/`}>{elem.title}</Link>
//
// 			<time dateTime={formatDate}>{formatDate}</time>
// 		</section>
// 	});
// 	return (
// 		<div>
// 			{/*<h1>Personalities</h1>*/}
// 			<div className="persShortList">
// 				{PersListing}
// 			</div>
// 		</div>
// 	);
// }






