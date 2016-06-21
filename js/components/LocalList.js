import React from 'react'
import _ from 'underscore'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchLocalsRequest, fetchLocalsSuccess, fetchLocalsFailure, 
	filterByNameSet, filterByNameReset, setLocal } from '../actions/actions.js';
import store from '../reducers/store.js';

<Link to="/users/nacho">Nacho</Link>

function LocalItem(props){
	return (<Link to={"/local/"+props.local.id}>{props.local.name}</Link>);
}

var LocalList = React.createClass({
	loadLocals(){
		U.get("/offices", fetchLocalsRequest, fetchLocalsSuccess, fetchLocalsFailure);
	},
	componentDidMount(){
		this.loadLocals();
	},
	render(){
		return (
			<div className="bg-grey content">
				<div className="bg-white locals centered">
					<h2>Locales</h2>
					{_.map(this.props.locals, function(local, i){
						return (<LocalItem key={i} local={local}></LocalItem>)
					})}
				</div>
			</div>
		)	
	}
})

const mapLocalsToProps = function(store) {
  return {
    locals: store.localsState.locals
  };
}

export default connect(mapLocalsToProps)(LocalList);