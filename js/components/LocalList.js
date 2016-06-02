import React from 'react'
import _ from 'underscore'
import { connect } from 'react-redux';
import { Link } from 'react-router';

<Link to="/users/nacho">Nacho</Link>

function LocalItem(props){
	return (<Link to={"/local/"+props.local.id}>{props.local.name}</Link>);
}

function LocalList(props){
	return (
		<div>
			{_.map(props.locals, function(local, i){
				return (<LocalItem key={i} local={local}></LocalItem>)
			})}
		</div>
	)
}

const mapLocalsToProps = function(store) {
  return {
    locals: store.localState.locals
  };
}

export default connect(mapLocalsToProps)(LocalList);