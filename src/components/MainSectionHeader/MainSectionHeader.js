import React, {Component} from "react";
import * as actions from "../../actions/Actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class MainSectionHeader extends Component {
	goBack = () => {
		this.props.store.status.myHistory.goBack();
	};
	render() {
		let button = (this.props.store.status.nav.navSelected.route === this.props.store.status.myHistory.location.pathname)
			? <span></span> : <button onClick={this.goBack}>BACK</button>;
		return (
			<div>
				{button}
				<h1>{this.props.store.status.nav.navSelected.name}</h1>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		store: state
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		toStore: (history) => {
			dispatch(actions.checkHistory(history))
		}
	}
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainSectionHeader));