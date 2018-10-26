import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import contentReducer from './reducers/contentReducer';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';

// import { createBrowserHistory } from 'history';
//
// const history = createBrowserHistory();


const comboRed = combineReducers({
	contentReducer,
	// routing
});

const store = createStore(
	comboRed,
	composeWithDevTools()
);
// const store = createStore(
// 	combiRed,
// 	compose(
// 		applyMiddleware(middleware),
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 		)
// );

// const history = syncHistoryWithStore(createBrowserHistory(), store);
// console.log(history);
// console.log(createBrowserHistory());

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
