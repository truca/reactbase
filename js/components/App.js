import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import axios from 'axios'

var MainLayout = React.createClass({
	
	render(){
		return (
			<div>
				Main Layout
				<Link to="/">Home</Link>
				<Link to="/users">Users</Link>
				<Link to="/users/nacho">Nacho</Link>
				{this.props.children}
			</div>
		)
	}
});

var Home = React.createClass({
	
	render(){
		return (
			<div>
				Home
			</div>
		)
	}
});

var User = React.createClass({
	
	render(){
		return (
			<div>
				User
				{this.props.children}
			</div>
		)
	}
});

var UserChild = React.createClass({
	
	render(){
		return (
			<div>
				User Child {this.props.params.userId}
			</div>
		)
	}
});

render((
  	<Router history={hashHistory}>
		<Route component={MainLayout}>
			<Route path="/" component={Home} />
			<Route path="users" component={User}>
				<Route path=":userId" component={UserChild} />
			</Route>
		</Route>
	</Router>
	),
  	document.getElementById('app')
);