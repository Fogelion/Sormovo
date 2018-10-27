import React, {Component} from 'react';


export default class PersonalTest extends Component {
	render() {
		return (
			<div>
				<h1>Test</h1>
				<p>{this.props.match.path}</p>
			</div>
		);
	}
}