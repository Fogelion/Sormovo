import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import jsonp from "jsonp";

export default class MonumentsInfo extends Component {
	state = {
		jsonResult: [],
		street: '',
		count: 0
	};
	componentDidMount() {
		let streetId = this.props.match.url.split('/')[2];
		// console.log(streetId);
		let url = 'http://kladr-api.ru/api.php' +
			// '&cityId=5200000100000' +
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
				console.log(data.result);
				this.setState({
					jsonResult: data.result,
					street: data.result[0].parents[2],
					count: this.state.count + 1
				});
			}
		});
	};


render() {
		let Title, Houses;
		// console.log(typeof this.state.jsonResult);
		if (typeof this.state.street.type !== 'undefined') {
			Title = `${this.state.street.type.toLowerCase()} ${this.state.street.name}`;
			Houses = this.state.jsonResult.map((el, ind) => {
				return (<p key={el.id + ind}>{el.type} №{el.name}, индекс: {el.zip}</p>)
			});
		}

		return (
			<div>
				<h2>{Title}</h2>
				{Houses}
			</div>
		);
	}
}