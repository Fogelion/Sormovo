import React, {Component} from 'react';
import MainSectionHeader from "../../MainSectionHeader/MainSectionHeader";



export default class PersonalTest extends Component {
	render() {
		return (
			<div>
				<MainSectionHeader myHistory={this.props.history}/>
				<h1>Test</h1>
				<p>{this.props.match.path}</p>
			</div>
		);
	}
}