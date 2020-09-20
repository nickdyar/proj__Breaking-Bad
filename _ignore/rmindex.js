import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import './index.css';
import Home from './containers/Home';
import Header from './containers/Header';
import Footer from './containers/Footer';
import NotFound from './containers/NotFound';
import About from './containers/About';
import Characters from "./components/Characters";
import Episodes from './components/Episodes';
import Locations from './components/Locations';
import SearchResults from './components/SearchResults';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div style={{ padding: 0 }}>
				<Header> Rick and Morty </Header>
				<Switch>
					<Route path="/characters" component={Characters} />
					<Route path="/episodes" component={Episodes} />
					<Route path="/locations" component={Locations} />
					<Route path="/search" component={SearchResults} />
					<Route path="/about" component={About} />
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();



// WEBPACK FOOTER //
// ./src/index.js