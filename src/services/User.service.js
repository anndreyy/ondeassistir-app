const config = require('../../config');
var axios = require('axios');
var qs = require('qs');
var url = config.uripath

export default class TaskService {

    login(formData) {

        
        var data = qs.stringify(formData);
        var parms = {
            method: 'post',
            url: url + "/login" ,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data,
            validateStatus: (status) => {
                return true; // I'm always returning true, you may want to do it depending on the status received
            }
        };

        return axios(parms);
    }
    getUsers(page, qty, qry) {
        
        var parms = {
            method: 'get',
            url: url + `/api/v1/user/list?page=${page}&qty=${qty}&qry=${qry}` ,
            validateStatus: (status) => {
                return true; // I'm always returning true, you may want to do it depending on the status received
            }
        };

        return axios(parms);
    }

    edit(form) {
        var data = qs.stringify(form);
        var parms = {
            method: 'put',
            url: url + "/api/v1/user/"+ form._id ,
            data: data,
            validateStatus: (status) => {
                return true; // I'm always returning true, you may want to do it depending on the status received
            }
        };

        return axios(parms);
    }
    save(form) {
        var data = qs.stringify(form);
        var parms = {
            method: 'post',
            url: url + "/api/v1/user/" ,
            data: data,
            validateStatus: (status) => {
                return true; // I'm always returning true, you may want to do it depending on the status received
            }
        };

        return axios(parms);
    }


}