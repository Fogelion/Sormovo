import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import navPoints from '../NavBar/navPoints';
import Header from '../../components/Header/Header';
import MainSection from '../MainSection/MainSection';
import './App.css';
import createHistory from 'history/createBrowserHistory';
import * as actions from "../../actions/Actions";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';

class App extends Component {



		// let history = createHistory();
		// let historyToStore = {
		// 	goBack: history.goBack,
		// 	path: history.location.pathname
		// };


	componentDidUpdate () {
		let history = createHistory();
		// let storeLoc = this.props.store.status.myHistory.location.pathname;
		let curLoc = history.location.pathname;

		// if (this.props.store.status.myHistory !== createHistory().location.pathname) {
		// 	this.props.historyToStore(createHistory().location.pathname);
		// }

		// if (storeLoc !== curLoc) {
		// 	this.props.historyToStore(history);
		// 	// console.log(history);
		// 	console.log(createHistory().location.pathname);
		// }

	}


	render() {
    return (
				<div className="App">
					<Header />
					<NavBar navPoints = {navPoints}/>
					<MainSection navPoints = {navPoints}/>
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
		historyToStore: (history) => {
			dispatch(actions.checkHistory(history))
		}
	}
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
