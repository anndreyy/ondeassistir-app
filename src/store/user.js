import UserService from "@/services/User.service"

var session = localStorage.getItem('session');

if (session) {
    session = JSON.parse(session);
} else {
    session = {
        auth: false,
        token: '',
        user: ''
    };
}

const UserModule = {
    state: () => ({
        session: session,
        users: {
            data: [],
            status: false,
            page: 1,
            qty: 10,
            qry: ""
        }
    }),
    mutations: {
        setSession(state, session) {
            state.session.auth = true;
            state.session.token = session.token;
            state.session.user = session.data;
            localStorage.setItem('session', JSON.stringify(state.session));
        },
        logout(state) {
            state.session.auth = false;
            state.session.token = null;
            state.session.user = null;
            localStorage.removeItem('session');
        },
        setUsers(state, res) {
            state.users.data = res.data;

            // Define o status de acordo com aquantidade dados que retornaram
            state.users.status = res.data.length > 0;
        },
        setPage(state, page) {
            // Define a página minima 1
            page = parseInt(page) < 1 ? 1 : page;

            // Grava a página
            state.users.page = page;
        },
        setSearch(state, qry) {
            // Grava a página
            state.users.qry = qry;
        },
    },
    actions: {
        async getUsers(context) {
            var service = new UserService();
            // limpa os usuários
            context.commit('setUsers', { data: [] });

            //Helpers
            var users = context.getters.usersSettings;

            // Pega os usuários pela quantidade
            const res = await service.getUsers(users.page, users.qty, users.qry);

            // Grava os usuáros
            context.commit('setUsers', res.data);
        },
        setPage(context, page) {
            var users = context.getters.usersSettings;

            // Só avança caso a ultima consulta tenha retornado dados 
            if (!users.data.length && users.page < page) {
                return false;
            }

            // Define a página
            context.commit('setPage', page);

            // Carrega os usuários com a nóva página
            context.dispatch('getUsers');
        },
        userUpdateSearch(context, value) {
            context.commit("setSearch", value);

            // Volta para primeira pagina
            context.commit('setPage', 1);

            // Carrega os usuários com o novo filtro
            context.dispatch('getUsers');
        },
        logout(context) {
            context.commit('logout');
        }

    },
    getters: {
        session: state => state.session,
        auth: state => state.session.auth,
        admin: state => {
            if(state.session.auth){
                return state.session.user.admin;
            }else{
                return false;
            }
        },
        token: state => state.session.token,
        users: state => state.users.data,
        usersSettings: state => state.users,
        usersColumns: () => {
            return [
                // {label: "_id", field: "_id"},
                { label: "Full Name", field: "fullname" },
                { label: "username", field: "username" },
                { label: "email", field: "email" },
                { label: "Status", field: "status" }
            ];
        },
        initials: state => {
            if (!state.session.auth) {
                return '';
            }
            var initials = state.session.user.fullname.match(/\b\w/g) || [];
            initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
            return initials;
        }
    }
}

export default UserModule;
