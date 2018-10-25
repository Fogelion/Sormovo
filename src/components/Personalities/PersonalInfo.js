import React, {Component, PropTypes } from 'react';
import PersExamp from "./PersExamp";
import { Route, Link, Redirect } from 'react-router-dom';

// export default function PersonalInfo({ match }) {
// 	// console.log(match.params.pers);
// 	const currentPers = PersExamp.find(el => el.id === match.params.pers);
// 	console.log(currentPers);
// 	let formatDate = currentPers.date.getFullYear() + '-' + currentPers.date.getMonth() + '-' + currentPers.date.getDate();
//
// 	return (
// 		<div>
// 			<section className='postPersons'>
// 				<header className='headerPersons'>
// 					<h2>{currentPers.title}</h2>
// 					<time dateTime={formatDate}>{formatDate}</time>
// 					<Link to={`${match.url}/testPage`}>To the test</Link>
// 				</header>
// 				<article className='contentPersons'>
// 					<p dangerouslySetInnerHTML={{__html: currentPers.text}}></p>
// 				</article>
// 			</section>
// 		</div>
// 	);
// }

export default class PersonalInfo extends Component {
	render() {
		const currentPers = PersExamp.find(el => el.id === this.props.match.params.pers);
		// console.log(currentPers);
		let formatDate, title, text, link, PersInfoPage;
		if(typeof currentPers !== "undefined") {
			formatDate = currentPers.date.getFullYear() + '-' + currentPers.date.getMonth() + '-' + currentPers.date.getDate();
			title = currentPers.title;
			text = currentPers.text;
			link = 'To the test';
			PersInfoPage =
				<section className='postPersons'>
					<header className='headerPersons'>
						<h2>{title}</h2>
						<time dateTime={formatDate}>{formatDate}</time>
						<Link to={`${this.props.match.url}/testPage`}>{link}</Link>
					</header>
					<article className='contentPersons'>
						<p dangerouslySetInnerHTML={{__html: text}}></p>
					</article>
				</section>;
		} else {
			PersInfoPage = <Redirect from={this.props.match.url} to="/404" />;
		}
		return (
			<div>
				{PersInfoPage}
			</div>
		);
	}
}

