import React, {Component} from 'react';
import axios from 'axios';
import {streetList} from './StreetList';
import {streets} from './Listing';
import jsonp from 'jsonp';

export default class Buildings extends Component {
	state = {
		jsonResult: [],
		count: 0
	}
	componentDidMount() {
		let query = '';
		let url = 'http://kladr-api.ru/api.php' +
			'?query=' + query +
			'&cityId=5200000100000' +
			'&contentType=street' +
			// '&streetId=52000001000104800' +
			// '&contentType=building' +
			'&limit=40';
		this.getJSONP(url);
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.count !== prevState.count && (typeof prevState.count !== 'undefined')){
			this.filt();
		}
	}
	filt = () => {
		// const ss = streetList.split(',').slice(10, 50);
		const ss = streetList.split(',');
		const qwe = this.state.jsonResult.filter((val) => {
			for(let i=0; i<=ss.length-1;i++) {
				if (val.name == ss[i]) {
					return val;
				}
			}
		});
		const ra = this.state.jsonResult.map(el =>{
			el = {
				id: el.id,
				name: el.name,
				type: el.type
			};
			return el
		});
	}

	getJSONP = (url, elem) => {
		jsonp(url, null, (err, data) => {
			if (err) {
				console.error(err.message);
			} else {
				this.setState({
					jsonResult: data.result,
					count: this.state.count + 1
				});
			}
		});
}
	render() {
		const Streets = streets.map((elem) => {
			return <p key={elem.id}>{elem.name}</p>
		});
		return (
			<div>
				{Streets}
			</div>
		);
	}
}






//                                                                                                     dadata

// axios({
// 	method: 'post',
// 	url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
// 	data: {
// 		'query': 'Гаугеля ',
// 		'locations': [{ "city_fias_id": "555e7d61-d9a7-4ba6-9770-6caa8198c483" }],
// 		'count': 25
// 	},
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'Accept': 'application/json',
// 		'Authorization': 'Token ffde05399a2d7a576bd087180dd0765f0515302a',
// 	}
// }).then(res => {
// 	console.log(res.data.suggestions);
// });



















