import React, {Component} from 'react';
import PersExamp from "./PersExamp";
import { Link, Redirect } from 'react-router-dom';

export default class PersonalInfo extends Component {
	render() {
		const currentPage = PersExamp.find(el => el.id === this.props.match.params.pers);
		let formatDate, title, text, link, InfoPage;
		if(typeof currentPage !== "undefined") {
			formatDate = currentPage.date.getFullYear() + '-' + currentPage.date.getMonth() + '-' + currentPage.date.getDate();
			title = currentPage.title;
			text = currentPage.text;
			link = 'To the test';
			InfoPage =
				<section className='contentSection'>
					<header className='contentHeader'>
						<h2 className='contentTitle'>{title}</h2>
						<p className='contentTime'><time dateTime={formatDate}>{formatDate}</time></p>
						{/*<Link to={`${this.props.match.url}/testPage`}>{link}</Link>*/}
					</header>
					<article className='contentText'>
						<p dangerouslySetInnerHTML={{__html: text}}></p>
					</article>
				</section>;
		} else {
			InfoPage = <Redirect from={this.props.match.url} to="/404" />;
		}
		return (
			<div className='contentInfoPage'>
				{InfoPage}
			</div>
		);
	}
}

