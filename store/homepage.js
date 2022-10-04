export const state = () => ({
    sliders: [],
    services: [],
    page:[],
    clients:[],
    catalog:[],
    blog:[],
})

export const getters = {
    sliders: (state) => state.sliders,
    services: (state) => state.services,
    page: (state) => state.page,
    clients: (state) => state.clients,
    catalog: (state) => state.catalog,
    blog: (state) => state.blog
}

export const mutations = {
    SET_SLIDERS(state, payload) {
        state.sliders = payload
    },
    SET_SERVICES(state, payload) {
        state.services = payload
    },
    SET_PAGE(state, payload){
        state.page = payload
    },
    SET_CLIENTS(state, payload){
        state.clients = payload
    },
    SET_CATALOG(state, payload){
        state.catalog = payload
    },
    SET_BLOG(state, payload){
        state.blog = payload
    }
}

export const actions = {
    async fetchHomepage({ commit }) {
        try {
            const res = await this.$axios('/api/homepage')
            const data = res.data.data;
            commit('SET_SLIDERS', data.sliders)
            commit('SET_SERVICES', data.services)
            commit('SET_PAGE', data.page)
            commit('SET_CLIENTS', data.clients)
            commit('SET_CATALOG', data.catalog)
            commit('SET_BLOG', data.blog)
        } catch (err) {
            console.error(err)
        }
    }
}