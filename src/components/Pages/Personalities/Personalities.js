import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PersExamp from './PersExamp.js';
import MainSectionHeader from "../../MainSectionHeader/MainSectionHeader";





// export default function Personalities({ match, history }) {
// 	console.log(history);
// 	const PersListing = PersExamp.map((elem) => {
// 		let formatDate = elem.date.getFullYear() + '-' + elem.date.getMonth() + '-' + elem.date.getDate();
// 		return <section className='persShort' key={elem.id}>
// 			<Link to={`${match.url}/${elem.id}`}>{elem.title}</Link>
//
// 			<time dateTime={formatDate}>{formatDate}</time>
// 		</section>
// 	});
// 	return (
// 		<div>
// 			<MainSectionHeader/>
// 			<h1>Personalities</h1>
// 			<div className="persShortList">
// 				{PersListing}
// 			</div>
// 		</div>
// 	);
// }

export default class Personalities extends Component {
	render() {
		// console.log(this.props.history);
		const PersListing = PersExamp.map((elem) => {
			let formatDate = elem.date.getFullYear() + '-' + elem.date.getMonth() + '-' + elem.date.getDate();
			return <section className='persShort' key={elem.id}>
				<Link to={`${this.props.match.url}/${elem.id}`}>{elem.title}</Link>

				<time dateTime={formatDate}>{formatDate}</time>
			</section>
		});
		return (
			<div>
				{/*<MainSectionHeader myHistory={this.props.history}/>*/}
				<h1>Personalities</h1>
				<div className="persShortList">
					{PersListing}
				</div>
			</div>
		);
	}
}




