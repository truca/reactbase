import React from 'react'

var Tickets = React.createClass({
	componentDidMount(){
		this.loadTickets();
	},
	loadTickets(){
		
	},
	render(){
		return (
			<div className="bg-grey content">
				<div className="bg-white locals centered">
					<h2>Tickets</h2>
					
				</div>
			</div>
		)
	}
})

module.exports = Tickets;