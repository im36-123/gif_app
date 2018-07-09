import Vuex from 'vuex'
import axios from 'axios'
import key from "../static/key.json";

const store = () => new Vuex.Store({
  state: {
    keyword: '',
    gifs: []
  },
  mutations: {
    updateText(state, val) {
      state.keyword = val
      console.log(state.keyword)
    },
    updateGifs(state, arr) {
      state.gifs = arr
    }
  },
  getters: {
    gifs: state => {
      return state.gifs
    }
  },
  actions: {
    async callApi({ commit }, payload) {
      console.log(payload.keyword)
      const options = {
        method: 'get',
        url: `https://api.tenor.com/v1/search?tag=${payload.keyword}&key=${key.key}`
      };

      console.log(options.url)

      try {
        const response = await axios(options);
        console.log(response);
        commit('updateGifs', response.data.results)
      } catch (error) {
        console.error(error);
      }
    }
  }
})

export default store
