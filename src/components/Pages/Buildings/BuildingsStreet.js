import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import jsonp from "jsonp";
import {streets} from './Listing';

export default class MonumentsInfo extends Component {
	state = {
		jsonResult: [],
		street: '',
		jsonFull: false
	};
	componentDidMount() {
		let streetId = this.props.match.url.split('/')[2];
		let url = 'http://kladr-api.ru/api.php' +
			'&streetId=' + streetId +
			'&contentType=building' +
			'&limit=100' +
			'&withParent=1';
		this.getJSON(url);
	}
	getJSON = (url) => {
		jsonp(url, null, (err, data) => {
			if (err) {
				console.error(err.message);
			} else {
				// console.log(data.result);
				if (data.result.length >= 1) {
					this.setState({
						jsonResult: data.result,
						street: data.result[0].parents[2],
						jsonFull: true
					});
				} else {
					this.setState({
						jsonFull: false
					});
				}

			}
		});
	};


	render() {
		const StreetChosen = streets.find(el => el.id === this.props.match.url.split('/')[2]);
		let Title, Houses;
		if (typeof StreetChosen !== 'undefined') {
			Title = <h2>{StreetChosen.name} {StreetChosen.type.toLowerCase()}</h2>;
		} else {
			Title = <Redirect from={this.props.match.url} to="/404" />;
		}
		if (this.state.jsonFull) {
			Houses = this.state.jsonResult.map((el, ind) => {
				return (<p key={el.id + ind}>{el.type} №{el.name}, индекс: {el.zip}</p>)
			});
		}
		return (
			<div>
				{Title}
				{Houses}
			</div>
		);
	}
}