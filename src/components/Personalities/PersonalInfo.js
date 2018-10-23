import React from 'react';
import PersExamp from "./PersExamp";
import { Route, Link } from 'react-router-dom';
import UnionRoute from "../UnionRoute";

export default function PersonalInfo({ match }) {
	// console.log(match.params.pers);
	const currentPers = PersExamp.find(el => el.id === match.params.pers);
	// console.log(currentPers);
	let formatDate = currentPers.date.getFullYear() + '-' + currentPers.date.getMonth() + '-' + currentPers.date.getDate();

	return (
		<div>
			<section className='postPersons'>
				<header className='headerPersons'>
					<h2>{currentPers.title}</h2>
					<time dateTime={formatDate}>{formatDate}</time>
					<Link to={`${match.url}/testPage`}>To the test</Link>
				</header>
				<article className='contentPersons'>
					<p dangerouslySetInnerHTML={{__html: currentPers.text}}></p>
				</article>
			</section>
			{/*<Route path="/personalities/:pers/:test" component={UnionRoute} />*/}
		</div>
	);
}

