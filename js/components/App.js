import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import socket from '../network.js';
import { Provider } from 'react-redux';
import store from '../reducers/store.js';
import _ from 'underscore'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import LocalList from './LocalList.js'
import Local from './Local.js'


function Nav(){
	return (<div>Nav</div>);
}

function MainLayout(props){
	return (
		<div>
			<Nav></Nav>
			{props.children}
		</div>
	)
}



render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={MainLayout}>
				<Route path="/" component={LocalList} />
				<Route path="local">
					<Route path=":localId" component={Local} />
				</Route>
			</Route>
		</Router>
	</Provider>,
  	document.getElementById('app')
);
