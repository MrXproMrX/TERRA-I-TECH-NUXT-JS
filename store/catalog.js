export const state = () => ({
    catalog:[]
})

export const mutations = {
    setCatalog(state,catalog){
        state.catalog = catalog
    }
}

export const actions = {
    async fetchCatalog({commit}){
        const catalog = await this.$axios.$get('/api/catalog')
        commit('setCatalog', catalog)
    }
}

export const getters = {
    catalog: s => s.catalog
}