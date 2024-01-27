import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import TitleView from '../views/Title.vue';
import Users from '../views/Users.vue';
import store from '@/store';

const routes = [{
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
        breadcrumb: [
            { name: 'Home' }
        ],
        title: router => { return "Onde Assistir?!" }
    },

},
{
    path: '/title/g/:titleId/:title',
    name: 'Title',
    component: Dashboard,
    beforeEnter: (to, from, next) => {

        // dispara o evento para pegar o title
        store.dispatch('getTitle', to.params);

        next();
    }
},
{
    path: '/title/v/:titleId/:title',
    name: 'TitleView',
    component: TitleView,
    // component: () =>
    //     import( /* webpackChunkName: "about" */ '../views/Title.vue'),
    meta: {
        breadcrumb: [
            { name: 'Home', link: "Dashboard" }
            , { name: 'Título' }

        ],
        title: router => {

            return  store.getters.selectedTitle.status ? store.getters.selectedTitle.data.title : "Carregando..." ;
        }
    },
    beforeEnter: (to, from, next) => {

        // dispara o evento para pegar o title
        store.dispatch('getTitle', to.params);

        next();

    },

},
{
    path: '/title/f/:query/:dontLoad?',
    name: 'TitleSearch',
    component: Dashboard,
    meta: {
        breadcrumb: [
            { name: 'Home' }
        ],
        title: router => { return "Onde Assistir" }
    },
    beforeEnter: (to, from, next) => {


        // Pega a ultimas rotas
        var prevRoute = store.getters.prevRoute;

        var lastQuery = 'Not defined';
        // pega a ultima query rodada a duas rotas (efeito de abrir e fechar o modal)
        if (prevRoute[prevRoute.length - 2]) {
            lastQuery = prevRoute[prevRoute.length - 2].params.query;
        }

        // verifica se a ultima query rodada é a mesma que a atual
        // Se for, não atualiza o valor do update search, se atualizar 
        // vai recarregar a pagina fazendo perder a posição do usuário na lista de busca
        if (to.params.query != lastQuery) {
            store.dispatch('updateSearch', to.params.query);
        }

        // store.dispatch('updateSearch', to.params.query);
        next();
    }
},
{
    path: '/users',
    name: 'Users',
    component: Users,
    beforeEnter: (to, from, next) => {


        if (store.getters.admin) {
            next();
            return false;
        }

        if (store.getters.auth) {
            next({ path: '/?error=Sem acesso' });
            return false;
        }

        next({ path: '/login?redirect=' + "/users" });
    }
},
{
    path: '/login',
    name: 'Login',
    beforeEnter: (to, from, next) => {

        if (to.query.action == "logout") {
            store.dispatch('logout');
        }

        next();
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import( /* webpackChunkName: "about" */ '../views/Login.vue')
}
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // Fixa a ultima routa
    store.dispatch("setPrevRoute", from);

    next();
})

router.afterEach((to, from) => {    
    // Vue.nextTick(() => {
    //     document.title = to.meta.title(to);
    // })
})

export default router