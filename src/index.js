import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import comboRed from './reducers/Reducer';
import { BrowserRouter as Router} from "react-router-dom";

import { applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';

const store = createStore(
	comboRed,
	composeWithDevTools(
		applyMiddleware(createLogger())
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
