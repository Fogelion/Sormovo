import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import MonumentsExamp from './MonumentsExamp';

export default class Monuments extends Component {
	render() {
		const ArticlesListing = MonumentsExamp.map((elem) => {
			let formatDate = elem.date.getFullYear() + '-' + elem.date.getMonth() + '-' + elem.date.getDate();
			return <section className='articleShort' key={elem.id}>
				<Link to={`${this.props.match.url}/${elem.id}`} className="articleShortLink" >{elem.title}</Link>
				<time dateTime={formatDate} className="articleShortTime" >{formatDate}</time>
			</section>
		});
		return (
			<div className="articleShortList">
				{ArticlesListing}
			</div>
		);
	}
}