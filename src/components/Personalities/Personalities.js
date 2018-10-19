import React from 'react';
import PersExamp from './PersExamp.js';


export default function Personalities() {
	// console.log(PersExamp[0].date.getFullYear() + '-' + PersExamp[0].date.getMonth() + '-' + PersExamp[0].date.getDate());
	let formatDate = PersExamp[0].date.getFullYear() + '-' + PersExamp[0].date.getMonth() + '-' + PersExamp[0].date.getDate();

	let testVAr1 = PersExamp[0].testMe;

	return (
		<div>
			<h1>Personalities</h1>
			<section className='postPersons'>
				<header className='headerPersons'>
					<h2>{PersExamp[0].title}</h2>
					<time dateTime={formatDate}>{formatDate}</time>
				</header>
				<article className='contentPersons'>
					<p dangerouslySetInnerHTML={{__html: PersExamp[0].text}}></p>
				</article>
			</section>
		</div>
	);
}

