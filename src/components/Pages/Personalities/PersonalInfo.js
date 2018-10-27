import React, {Component} from 'react';
import PersExamp from "./PersExamp";
import { Link, Redirect } from 'react-router-dom';

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

