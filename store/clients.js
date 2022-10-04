export const state = () => ({
    clients:[]
})

export const mutations = {
    setClients(state, clients){
        state.clients = clients
    }
}

export const actions = {
    async fetch({commit}){
        const clients = await this.$axios.$get('/api/clients')
        commit('setClients', clients)
    }
}

export const getters = {
    clients: s => s.clients
}