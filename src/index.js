import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const stateInit = {
	nav: {
		navSelected: ''
	},
	text: 'start-text'
};

const contentReducer = (state = stateInit, action) => {
	let sendState = {...state};
	console.log(sendState);
	sendState.nav.navSelected = action.navId;
	switch (action.type) {
		case 'TOGGLE':
			return (
				sendState);
		default:
			return state;
	}
};
const store = createStore(contentReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log('store = ');
// console.log(store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
