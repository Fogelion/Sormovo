import React from 'react';
import { Link } from 'react-router-dom';
import PersExamp from './PersExamp.js';





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
			</div>
		</div>
	);
}




