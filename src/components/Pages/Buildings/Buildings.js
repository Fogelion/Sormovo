import React, {Component} from 'react';
import {streets} from './Listing';
import { Link } from 'react-router-dom';


export default class Buildings extends Component {
	render() {
		const Streets = streets.map((elem) => {
			const list = <p key={elem.id}>
				<Link to={`${this.props.match.url}/${elem.id}`} id={elem.id}>
					{elem.name} {elem.type.toLowerCase()}
				</Link>
				</p>;
			return list;
		});
		return (
			<div>
				{Streets}
			</div>
		);
	}
}