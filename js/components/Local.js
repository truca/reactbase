import React from 'react'
import _ from 'underscore'
import { connect } from 'react-redux';

function Local(props){
	return (<div>{props.local.name}</div>);
}

const mapLocalToProps = function(store, props) {
  return {
    local: _.find(store.localState.locals, function(local){ return local.id == props.params.localId})
  };
}

export default connect(mapLocalToProps)(Local);