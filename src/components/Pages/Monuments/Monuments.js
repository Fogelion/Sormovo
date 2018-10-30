import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import MonumentsExamp from './MonumentsExamp';

export default class Monuments extends Component {
	render() {
		const MonumentsListing = MonumentsExamp.map((elem) => {
			let formatDate = elem.date.getFullYear() + '-' + elem.date.getMonth() + '-' + elem.date.getDate();
			return <section className='monumShort' key={elem.id}>
				<Link to={`${this.props.match.url}/${elem.id}`}>{elem.title}</Link>
				<time dateTime={formatDate}>{formatDate}</time>
			</section>
		});
		return (
			<div>
				<div className="monumShortList">
					{MonumentsListing}
				</div>
			</div>
		);
	}
}