export const state = () => ({
    playList: []
})
  
export const mutations = {
    updatePlayList(state,payload) {
        state.playList = payload;
    }
}

export const actions = {
    clearPlayList({commit,state}, data) {
        commit('updatePlayList', [])
    }
}