export const state = () => ({
    playList: [],
    currentIndex: 0,
})
  
export const mutations = {
    updatePlayList(state,payload) {
        state.playList = payload;
    },
    updateIndex(state,payload){
        state.currentIndex = payload;
    }
}

export const actions = {
    clearPlayList({commit,state}, data) {
        commit('updatePlayList', [])
    }
}