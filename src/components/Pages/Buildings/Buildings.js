import React, {Component} from 'react';
import axios from 'axios';


export default class Buildings extends Component {
	componentDidMount() {
		const jsonp = require('jsonp');
		let url = 'http://kladr-api.ru/api.php' +
			'?query=' +
			'&cityId=5200000100000' +
			'&contentType=street' +
			// '&streetId=52000001000104800' +
			// '&contentType=building' +
			'&limit=50';
		jsonp(url, null, (err, data) => {
			if (err) {
				console.error(err.message);
			} else {
				console.log(data.result);
			}
		});


			// cityId =5200000100000
// axios({
// 	method: 'get',
// 	url: 'http://kladr-api.ru/api.php?query=%D0%90%D1%80%D1%85&contentType=city&withParent=1&limit=2',
// }).then(res => {
// 	console.log(res);
// });

	}
	render() {
		return (
			<div>
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

