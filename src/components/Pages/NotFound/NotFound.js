import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as actions from "../../../actions/Actions";
import {connect} from "react-redux";
import createHistory from "history/createBrowserHistory";

class NotFound extends Component {
	componentDidUpdate () {
		this.if404();
	}
	if404 = () => {
		if (!this.props.store.status.is404) {this.props.toStore(true);}
	};
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

const mapStateToProps = (state) => {
	return {
		store: state
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		toStore: (none) => {
			dispatch(actions.check404(none))
		}
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
