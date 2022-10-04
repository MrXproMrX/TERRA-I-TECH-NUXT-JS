export const state = () => ({
    catalog_in:[]
})

export const mutations = {
    setCatalog_in(state,catalog_in){
        state.catalog_in = catalog_in
    }
}

export const actions = {
    async fetchCatalog_in({commit}){
        const catalog_in = await this.$axios.$get('/api/catalog?id=3&page=2')
        commit('setCatalog_in', catalog_in)
    }
}

export const getters = {
    catalog_in: s => s.catalog_in
}