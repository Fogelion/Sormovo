import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import contentReducer from './reducers/contentReducer';
import { BrowserRouter as Router} from "react-router-dom";


const store = createStore(contentReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	// console.log(BrowserRouter);
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
