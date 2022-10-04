export const state = () => ({
    articles:[]
})

export const mutations = {
    setArticles(state, articles){
        state.articles = articles
    }
}

export const actions = {
    async fetch({commit}){
        const articles = await this.$axios.$get('/api/articles')
        commit('setArticles', articles)
    }
}

export const getters = {
    articles: s => s.articles
}