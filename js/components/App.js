import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import socket from '../network.js';
import { Provider } from 'react-redux';
import _ from 'underscore'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import LocalList from './LocalList.js'
import Local from './Local.js'
import Tickets from './Tickets.js'
import { fetchLocalsRequest, fetchLocalsSuccess, fetchLocalsFailure,
	filterByNameSet, filterByNameReset } from '../actions/Locals.actions.js';
import '../Utils.js';
import store from '../reducers/store.js';


var Nav = React.createClass({
	back(){
		this.context.router.goBack()
	},
	render(){
		return (
			<div id="nav" className="bg-white">
				<i className="fa fa-chevron-left back" aria-hidden="true" onClick={this.back}></i>
				<img className="centered logo" src="img/logo-0q.png"/>
				<Link to={"/tickets"}>
					<i className="fa fa-chevron-right forward" aria-hidden="true"></i>
				</Link>
			</div>
		);
	}
});

var Filter = React.createClass({
	filterByNameSet(){
		store.dispatch(filterByNameSet( this.refs.search ));
	},
	render(){
		<input ref="search" type="text" placeholder="Búsqueda" onChange={this.filterByNameSet} />
	}
});

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
				<Route path="tickets" component={Tickets} />
			</Route>
		</Router>
	</Provider>,
  	document.getElementById('app')
);
