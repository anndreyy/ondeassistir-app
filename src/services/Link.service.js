const config = require('../../config');
var axios = require('axios');
var qs = require('qs');
var url = config.pathserver + "/link"

export default class LinkService {


    add(form) {

        var data = qs.stringify(form);
        
        var parms = {
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data,
        };

        return axios(parms);
    }


}