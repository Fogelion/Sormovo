import React, {Component} from 'react';
import MonumentsExamp from './MonumentsExamp';
import { Link, Redirect } from 'react-router-dom';

export default class MonumentsInfo extends Component {
	render() {
		console.log(this.props.match);
		const currentMonum = MonumentsExamp.find(el => el.id === this.props.match.params.monum);
		console.log(currentMonum);
		let formatDate, title, text, link, MonumInfoPage;
		if(typeof currentMonum !== "undefined") {
			formatDate = currentMonum.date.getFullYear() + '-' + currentMonum.date.getMonth() + '-' + currentMonum.date.getDate();
			title = currentMonum.title;
			text = currentMonum.text;
			MonumInfoPage =
				<section className='postMonum'>
					<header className='headerMonum'>
						<h2>{title}</h2>
						<time dateTime={formatDate}>{formatDate}</time>
					</header>
					<article className='contentMonum'>
						<p dangerouslySetInnerHTML={{__html: text}}></p>
					</article>
				</section>;
		} else {
			MonumInfoPage = <Redirect from={this.props.match.url} to="/404" />;
		}
		return (
			<div>
				{MonumInfoPage}
			</div>
		);
	}
}