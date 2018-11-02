import React, {Component} from 'react';
import {streets} from './Listing';
import { Link } from 'react-router-dom';
import {ALPHABET} from "../../../constants/Constants";
import './Buildings.css';


export default class Buildings extends Component {
	render() {
		const streetsAlpha = ALPHABET.filter(p => p !== "Ы" && p !== "Ж" && p !== "Ё");
		const Streets = streetsAlpha.map((elem, index) => {
			let order = streets.filter(filt => {
				if (index === 0 && filt.name.substring(0,1) >= 1 && filt.name.substring(0,1) <= 9) {
					return filt;
				} else if (filt.name.substring(0,1) === elem) {
					return filt;
				}
			});
			let orderingStreets = order.map(street =>
				<p key={street.id} className="orderAlphaStreetsName">
					<Link to={`${this.props.match.url}/${street.id}`} id={street.id} className="orderAlphaStreetsLink">
						{street.name}{street.typeShort}
						</Link>
					{/*<Link to={`${this.props.match.url}/${street.id}`} id={street.id}>{street.name} {street.type.toLowerCase()}</Link>*/}

				</p>
			);
			return (
				<section className="orderAlpha" key={elem + index}>
					<h3 className="orderAlphaTitle" >{elem}</h3>
					<section className="orderAlphaStreets">
						{orderingStreets}
					</section>
				</section>
			);
		});
		// Streets();
		return (
			<div className="StreetsMainList">
				{Streets}
			</div>
		);
	}
}