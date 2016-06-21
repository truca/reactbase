import $ from "jquery"
import {Socket} from "phoenix"

let socket = new Socket('ws://zeroq.ml:4000/socket', {params: {token: window.userToken}})


socket.connect();

// Now that you are connected, you can join channels with a topic:
/*let channel = socket.channel("notify:1", {})
channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })*/

/*let sendy = $("#sendy")
sendy.on("click", event => {
  channel.push("echo", { body: "clicked" })
})

let mbox = $(".messages")
channel.on("message", payload => {
  mbox.append(payload.message + "<br />")
})*/

export default socket