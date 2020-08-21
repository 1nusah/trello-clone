import React from 'react';
import ReactDOM from 'react-dom';
import App from './freshStart/components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from './freshStart/store';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
// store = { store };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
