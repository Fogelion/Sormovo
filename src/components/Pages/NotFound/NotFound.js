import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default class NotFound extends Component {
	// componentDidMount() {
	// 	axios.get(`https://api.forismatic.com/api/1.0/get?method=getQuote`)
	// 		.then(res => {
	// 			console.log(res);
	// 		})
	// }
	render() {
		return (
			<div>
				<h1>404</h1>
				<h2>Свиток ещё не написан</h2>
				<Link to='/'><p>Вернуться к летописцу</p></Link>
			</div>
		);
	}
}
