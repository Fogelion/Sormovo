import {combineReducers} from 'redux';
import * as constants from "../constants/Constants";

const stateInit = {
	nav: {
		navSelected: {
			'id': 'navPointBut0',
			'forNavBar': true,
			'name': 'Главная',
			'route': '/'
		},
		navPath: '/'
	},
	myHistory: {
		location: {
			pathname: '/'
		}
	}
};



const contentReducer = (state = stateInit, action) => {
	let sendState = {...state};
	switch (action.type) {
		case constants.TOOGLE:
			sendState.nav = action.navInfo;
			return (
				sendState);
		case constants.HISTORY:
			sendState.myHistory = action.history;
			return (
				sendState);
		default:
			return sendState;
	}
};

const comboRed = combineReducers({
	status: contentReducer,
	// routing
});

export default comboRed;