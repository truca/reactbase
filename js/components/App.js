import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import { Provider } from 'react-redux';
import _ from 'underscore'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import RepoList from './RepoList.js'
import Repo from './Repo.js'
import Tickets from './Tickets.js'
import { fetchReposRequest, fetchReposSuccess, fetchReposFailure,
	filterByNameSet, filterByNameReset } from '../actions/Repos.actions.js';
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
				<img className="centered logo" src="img/logo.png"/>
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
				<Route path="/" component={RepoList} />
				<Route path="repo">
					<Route path=":repoId" component={Repo} />
				</Route>
				<Route path="tickets" component={Tickets} />
			</Route>
		</Router>
	</Provider>,
  	document.getElementById('app')
);
