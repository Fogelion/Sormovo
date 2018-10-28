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
	componentDidUpdate () {
		this.locateNav();
	}
	locateNav = () => {
		let history = createHistory();
		let storeLoc = this.props.store.status.myHistory.location.pathname;
		let curLoc = history.location.pathname;
		if (storeLoc !== curLoc) this.props.toStore(history);
	};
	render() {
		this.locateNav();
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
		toStore: (history) => {
			dispatch(actions.checkHistory(history))
		}
	}
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
