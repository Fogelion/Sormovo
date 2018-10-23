import React from 'react';



export default function PersonalTest({ match }) {
	// console.log(match);
	console.log('IUGAIUFG');
	return (
		<div>
			<h1>Test</h1>
			<p>{match.path}</p>

		</div>
	);
}