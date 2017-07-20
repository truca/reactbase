import React from 'react'
import R from 'ramda'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchReposRequest, fetchReposSuccess, fetchReposFailure,
	filterByNameSet, filterByNameReset, setRepo } from '../actions/Repos.actions.js';
import store from '../reducers/store.js';

<Link to="/users/nacho">Nacho</Link>

function RepoItem(props){
	return (<Link to={`/repo/${props.repo.name}`}>{props.repo.name}</Link>);
}

var RepoList = React.createClass({
	loadRepos(){
		U.get("/users/truca/repos", fetchReposRequest, fetchReposSuccess, fetchReposFailure);
	},
	componentDidMount(){
		this.loadRepos();
	},
	render(){
		return (
			<div className="bg-grey content">
				<div className="bg-white repos centered">
					<h2>Repos</h2>
					{R.map((repo, i) => (<RepoItem key={i} repo={repo}></RepoItem>), this.props.repos)}
				</div>
			</div>
		)
	}
})

const mapReposToProps = function(store) {
  return {
		repos: store.reposState.repos
  };
}

export default connect(mapReposToProps)(RepoList);
