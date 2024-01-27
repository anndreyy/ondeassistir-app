import TitleService from "@/services/Title.service"
import router from '@/router'

// get title localstorage
const arrTitles = JSON.parse(localStorage.getItem('titles')) || false;

const TitleModule = {
    state: () => ({
        titles: {
            movies: null,
            series: null,
            animes: null,
            games: null,
            latest: null,
        },
        status: false,
        search: {
            status: false,
            value: "",
            data: []
        },
        selectedTitle: {
            status: false,
            data: null
        }
    }),
    mutations: {
        setTitles(state, titles) {
            state.titles.movies = titles.data.movies;
            state.titles.series = titles.data.series;
            state.titles.animes = titles.data.animes;
            state.titles.games  = titles.data.games;
            state.titles.latest = titles.data.latest;

            // salva localstorage
            localStorage.setItem('titles', JSON.stringify(titles.data));
        },
        setLoadTitleStatus(state, status) {
            state.status = status
        },
        updateSearch(state, search) {
            state.search.value = search;            
            state.search.status = (search != '');
        },
        setTitleSearch(state, res) {
            state.search.data = res.data;
        },
        setSelectedTitle(state, data) {
            state.selectedTitle.data = data;
            state.selectedTitle.status = (data != null);
        }
    },
    actions: {
        async getTitles(context) {
            context.commit('setLoadTitleStatus', false);

            if(arrTitles){
                context.commit('setTitles', {data: arrTitles});
                context.commit('setLoadTitleStatus', true);
                console.log('load data from localstorage');
            }
            
            var service = new TitleService();
            
            const res = await service.getTitles();
            
            context.commit('setTitles', res.data);
            context.commit('setLoadTitleStatus', true);
        },
        async searchTitle(context, search) {

            var service = new TitleService();

            context.commit('setTitleSearch', { data: [] });

            const res = await service.searchTitle(search);

            context.commit('setTitleSearch', res.data);
        },
        updateSearch(context, search) {
            context.commit('updateSearch', search);

            if (search != '') {
                context.dispatch("searchTitle", search);
            }
        },
        async getTitle(context, data) {
            var titleId = data.titleId;

            // Limpa
            context.commit("setSelectedTitle", null);            
            context.commit("setTitlePage", 'Carregando...');

            if(!titleId){
                console.error("titleId não existe");
            }

            // Primeiro procura pelo id do que já foi baixado
            // var resLocal = state.titles.movies.find( title => title._id == titleId);
            
            // Se não encontrar, procura na base
            var service = new TitleService();
            const res = await service.get(titleId);

            context.commit("setSelectedTitle", res.data.result);
        },
        async refreshTitle(context, titleId) {

            if(!String(titleId)){
                console.error("titleId é obrigatório");
            }

            // // Limpa
            // context.commit("setSelectedTitle", null);
            // context.commit("setTitlePage", 'Carregando...');
            
            // Se não encontrar, procura na base
            var service = new TitleService();
            const res = await service.get(titleId);

            context.commit("setSelectedTitle", res.data.result);
        },
        setSelectedTitle(context, title) {

            context.commit("setSelectedTitle", title);
        }
    },
    getters: {
        movies: state => state.titles.movies,
        series: state => state.titles.series,
        animes: state => state.titles.animes,
        games: state => state.titles.games,
        latest: state => state.titles.latest,
        statusTitle: state => state.status,
        titleSearch: state => state.search,
        selectedTitle: state => state.selectedTitle,
    }
}

export default TitleModule;