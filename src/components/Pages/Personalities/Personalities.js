import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import PersExamp from './PersExamp';
import {ALPHABET} from "../../../constants/Constants";


export default class Personalities extends Component {
	render() {
		const PersAlphabet = ALPHABET.slice(1).map((elem, index) => {
			return <span key={elem + index}>{elem}</span>
		});
		console.log(PersAlphabet);
		const ArticlesListing = PersExamp.map((elem) => {
			// let formatDate = elem.date.getFullYear() + '-' + elem.date.getMonth() + '-' + elem.date.getDate();
			return<section className='articleShort' key={elem.id}>
				<Link to={`${this.props.match.url}/${elem.id}`} className="articleShortLink" >{elem.title}</Link>
				{/*<time dateTime={formatDate} className="articleShortTime" >{formatDate}</time>*/}
			</section>
		});
		return (
			<div>
				<section className="PersAlphabet">{PersAlphabet}</section>
				<div className="articleShortList">
					{ArticlesListing}
				</div>
			</div>
		);
	}
}




