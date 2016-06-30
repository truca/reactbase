import React from 'react'
import _ from 'underscore'
import { connect } from 'react-redux';
import store from '../reducers/store.js';
import { fetchLocalRequest, fetchLocalSuccess, fetchLocalFailure,
	fetchQueuesRequest, fetchQueuesSuccess, fetchQueuesFailure,
	ticket, lastTicket, lastCall } from '../actions/Locals.actions.js';
import socket from '../network.js';


var Local = React.createClass({
	loadLocal(){
		U.get("/offices/" + this.props.params.localId, fetchLocalRequest, fetchLocalSuccess, fetchLocalFailure);
	},
	loadQueues(){
		//U.get("/offices/" + this.props.params.localId + "/lines", fetchQueuesRequest, fetchQueuesSuccess, fetchQueuesFailure);
		var queues = [
			{
				virtual:false,
				slug:"escrituras-publicas",
				office_id:1,
				name:"Escrituras Públicas",
				limit:0,
				id:3,
				frozen:false,
				last_ticket: {number: 1, line_id: 1, id: 1},
				last_call: {number: 1, line_id: 1, id: 1},
				ticket: null
			},
			{
				"virtual":false,
				"slug":"meson",
				"office_id":1,
				"name":"Mesón",
				"limit":0,
				"id":2,
				"frozen":false,
				last_ticket: {number: 1, line_id: 1, id: 1},
				last_call: {number: 1, line_id: 1, id: 1},
				ticket: {user_id: null, number: 1, id: 7, generation_id: null}
			},
			{
				"virtual":false,
				"slug":"atencion-general",
				"office_id":1,
				"name":"Atención General",
				"limit":0,
				"id":1,
				"frozen":true,
				last_ticket: {number: 1, line_id: 1, id: 1},
				last_call: {number: 1, line_id: 1, id: 1},
				ticket: null
			}
		];
		store.dispatch(fetchQueuesSuccess(queues));
	},
	requestTicket(lineId){
		//store.dispatch(fetchQueuesRequest());
		U.post("/lines/" + lineId + "/tickets",
			function success(response){
				console.log(response.data.data);
				store.dispatch(ticket(response.data.data, lineId));
			}.bind(this),
			function error(error){
				console.log(error);
				console.log(error.responseText);
				//store.dispatch(fetchQueuesFailure(JSON.parse(error).data));
				//this.loadLocal();
			}.bind(this),
			{ticket: {number: 1}}
		);
	},
	componentDidMount(){
		this.loadLocal();
		this.loadQueues();
		//console.log("notify:"+this.props.params.localId);
		let channel = socket.channel("notify:"+this.props.params.localId, {})
		channel.join().receive("ok", resp => { console.log("Joined successfully", resp) })
		  .receive("error", resp => { console.log("Unable to join", resp) })

		channel.on("ticket", resp => {
			console.log("Ticket", resp);
			store.dispatch(lastTicket(resp, resp.line_id));

		})
		channel.on("call", resp => {
			console.log("Call", resp);
			store.dispatch(lastCall(resp, resp.line_id));
		})
		channel.on("reset", resp => { console.log("Reset", resp) })
		channel.on("freeze", resp => { console.log("Freeze", resp) })


	},
	render(){
		var html = this.props.fetching_local && this.props.fetching_queues?
			(<div className="bg-grey content">loading</div>)
			:
			(<div className="bg-grey content">
				<div className="local centered bg-white">
					<h2>{this.props.local.name}</h2>
					{_.map(this.props.queues, function(queue, i){
						return (
							<div className="queue" key={i}>
								<h4>{queue.name}</h4>
								{!queue.ticket?
									( <button className="white bg-blue" onClick={this.requestTicket.bind(this, queue.id)}>Pedir Ticket</button> )
									:
									( <span>Número: {queue.ticket.number}, Actual: {queue.last_call.number}, Ultimo Pedido: {queue.last_ticket.number}</span> )
								}
							</div>
						)
					}.bind(this))}
				</div>
			</div>)
		return (html);
	}
})

const mapLocalToProps = function(store, props) {
  return {
    local: store.localState.local,
    queues: store.localState.queues,
    fetching_local: store.localState.fetching_local,
    fetching_queues: store.localState.fetching_queues
  };
}

export default connect(mapLocalToProps)(Local);
