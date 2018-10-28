import React, {Component} from 'react';
import axios from 'axios';


export default class Buildings extends Component {
	componentDidMount() {
		axios.get(`https://kladr-api.ru/api.php?query=%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&oneString=1&limit=1&withParent=1/`)
			.then(res => {
				console.log(res);
			})
	}
	render() {
		return (
			<div>
			</div>
		);
	}
}

