import React, {Component} from "react";


export default class MainSectionHeader extends Component {
	goBack = () => {
		this.props.myHistory.goBack();
	};
	render() {
		return (
			<div>
				<button onClick={this.goBack}>BACK</button>
			</div>
		);
	}
}