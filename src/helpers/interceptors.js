import axios from 'axios';
import store from '@/store'
import Router from '@/router'


export default function setup() {
    axios.interceptors.request.use((config) => {
        const token = store.getters.token;
        if(token) {
            config.headers['x-access-token'] = token;
        }else{
            // Verifica se a página atual é a de login, caso contrário redireciona para
            // página de login
            // if(Router.currentRoute.name != "Login"){
            //     Router.push({name: "Login"});
            // }
        }

        store.commit("setLoading", true);

        return config;
    }, function(err) {
        return Promise.reject(err);
    });
    axios.interceptors.response.use((response) => {
        store.commit("setLoading", false);

        if(response.status == 401){
            // Verifica se a página atual é a de login, caso contrário redireciona para
            // página de login
            // if(Router.currentRoute.name != "Login"){
            //     Router.push({name: "Login"});
            // } 
        }

        return response;

    }, function(err) {
        return Promise.reject(err);
    });
}