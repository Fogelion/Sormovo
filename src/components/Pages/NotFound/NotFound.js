import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as actions from "../../../actions/Actions";
import {connect} from "react-redux";


class NotFound extends Component {
	componentDidMount() {
		this.if404();
	}
	componentDidUpdate () {
		this.if404();
	}
	if404 = () => {
		if (!this.props.store.status.is404) {
			let navState = {
				navSelected: {
					'id': 'navPointBut1100',
					'forNavBar': false,
					'name': '404',
					'route': '/404',
				},
				navPath: '/404'
			};
			this.props.set404(true);
			this.props.toStore(navState);
		}
	};
	render() {
		let go404 = (this.props.store.status.is404 && this.props.match.url!=="/404") ?
			<Redirect from={this.props.match.url} to="/404" /> : "" ;
		return (
			<div>
				{go404}
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
		set404: (none) => {
			dispatch(actions.check404(none))
		},
		toStore: (navInfo) => {
				dispatch(actions.toggleNav(navInfo))
		}
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
