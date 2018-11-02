import React, {Component} from 'react';
import MonumentsExamp from './MonumentsExamp';
import { Redirect } from 'react-router-dom';

export default class MonumentsInfo extends Component {
	render() {
		const currentPage = MonumentsExamp.find(el => el.id === this.props.match.params.monum);
		let formatDate, title, text, InfoPage;
		if(typeof currentPage !== "undefined") {
			formatDate = currentPage.date.getFullYear() + '-' + currentPage.date.getMonth() + '-' + currentPage.date.getDate();
			title = currentPage.title;
			text = currentPage.text;
			InfoPage =
				<section className='contentSection'>
					<header className='contentHeader'>
						<h2 className='contentTitle'>{title}</h2>
						<p className='contentTime'><time dateTime={formatDate}>{formatDate}</time></p>
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