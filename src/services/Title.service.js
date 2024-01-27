const config = require('../../config');
var axios = require('axios');
var qs = require('qs');
var url = config.pathserver + "/title"

export default class TaskService {


    getTitles(){

        var parms = {
            method: 'get',
            url: url + "/dashboard",
        };

        return axios(parms);
    }
    searchTitle(qry){

        var parms = {
            method: 'get',
            url: url + "/f/" + qry,
        };

        return axios(parms);
    }
    get(titleId){

        var parms = {
            method: 'get',
            url: url + "/" + titleId,
        };

        return axios(parms);
    }


}