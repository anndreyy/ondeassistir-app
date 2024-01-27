import { createStore } from 'vuex';
import UserModule from "./user";
import TitleModule from "./title";

export default createStore({
    state: {
        prevRoute: [],
        loading: false,
        titlePage: "Onde Assistir?",
        menu: false 
    },
    mutations: {
        setPrevRoute(state, route) {
            // Grava somente os 10 primeiras rotas
            state.prevRoute.push(route);

            if (state.prevRoute.length > 10) {
                state.prevRoute.shift(); // remove os primeiros elementos
            }
        },
        setLoading(state, loading) {
            // Grava somente os 10 primeiras rotas
            state.loading = loading;
        },
        setTitlePage(state, titlePage) {
            state.titlePage = titlePage;
        },
        setMenu(state, menu) {
            state.menu = menu;
        }
    },
    actions: {
        // Tasks
        setPrevRoute(context, route) {
            context.commit("setPrevRoute", route);

        },

        setLoading(context, loading) {
            context.commit("setLoading", loading);
        },

        setTitlePage(context, titlePage) {
            context.commit("setTitlePage", titlePage);
        },

        setMenu(context, menu) {
            context.commit("setMenu", menu);
        },
    },
    getters: {
        prevRoute: state => state.prevRoute,
        loading: state => state.loading,
        titlePage: state => state.titlePage,
        menu: state => state.menu,
    },
    modules: {
        user: UserModule,
        title: TitleModule,
    }
})