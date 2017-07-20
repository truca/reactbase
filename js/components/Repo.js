import React from 'react'
import _ from 'underscore'
import { connect } from 'react-redux';
import store from '../reducers/store.js';
import { fetchRepoRequest, fetchRepoSuccess, fetchRepoFailure,
	fetchQueuesRequest, fetchQueuesSuccess, fetchQueuesFailure,
	ticket, lastTicket, lastCall } from '../actions/Repo.actions.js';


var Repo = React.createClass({
	loadRepo(){
		U.get(`/repos/truca/${this.props.params.repoId}`, fetchRepoRequest, fetchRepoSuccess, fetchRepoFailure);
	},
	componentDidMount(){
		this.loadRepo();
	},
	render(){
		var html = this.props.fetching_repo && this.props.fetching_queues?
			(<div className="bg-grey content">loading</div>)
			:
			(<div className="bg-grey content">
				<div className="repo centered bg-white">
					<h2>{this.props.repo.name}</h2>
					<h4>{this.props.repo.full_name}</h4>
					<h4>{this.props.repo.owner.login}</h4>
				</div>
			</div>)
		return (html);
	}
})

const mapRepoToProps = function(store, props) {
  return {
    repo: store.repoState.repo,
    queues: store.repoState.queues,
    fetching_repo: store.repoState.fetching_repo,
    fetching_queues: store.repoState.fetching_queues
  };
}

export default connect(mapRepoToProps)(Repo);
