import axios from 'axios'
import _ from 'underscore'
import store from './reducers/store.js';

window.U = {
    apiUrl: 'http://zeroq.ml:4000/api/v1',
    get: function(path, sending, success, failure){
        //console.log(sending());
        store.dispatch(sending())
        console.log(this.apiUrl + path)
        axios.get(this.apiUrl + path)
        .then(response => {
            console.log(response.data.data);
            store.dispatch(success(response.data.data));
            //console.log(success(response.data.data));
        })
        .catch(error => {
            console.log(error);
            store.dispatch(failure(error));
            //console.log(failure(error));
        }); 
    },
    post: function(path, success, error, data){
        //{"ticket": {"number": 1}}
        axios.post(this.apiUrl + path, data)
        .then(success)
        .catch(error);
    },
    merge: function(){
        return _.extend({}, ...arguments);
    }
}