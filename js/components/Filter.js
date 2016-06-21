import React from 'react'
import { fetchDistrictsRequest, fetchDistrictsSuccess, fetchDistrictsFailure,
	fetchCategoriesRequest, fetchCategoriesSuccess, fetchCategoriesFailure} from '../actions/actions.js';

var Filter = React.createClass({
	componentDidMount(){
		var filters = this.props.type == "Districts"? this.getDistricts : this.getCategories
	},
	filterByNameSet(){
		store.dispatch(filterByNameSet( this.refs.search ));
	},
	getDistricts(){
		U.get("/districts", fetchDistrictsRequest, fetchDistrictsSuccess, fetchDistrictsFailure);
	},
	getCategories(){
		U.get("/categories", fetchCategoriesRequest, fetchCategoriesSuccess, fetchCategoriesFailure);
	},
	render(){
		return (
			<div>
				<input ref="search" type="text" placeholder="Búsqueda" onChange={this.filterByNameSet} />
				<input type="text" placeholder="Buscar" />
			</div>
		)
	}
})

const mapFiltersToProps = function(store) {
  return {
    locals: store.localsState.locals
  };
}

export default connect(mapFiltersToProps)(Filter);
