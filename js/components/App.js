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

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={RepoList} />
			<Route path="repo">
				<Route path=":repoId" component={Repo} />
			</Route>
			<Route path="tickets" component={Tickets} />
		</Router>
	</Provider>,
  	document.getElementById('app')
);
