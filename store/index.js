import Vuex from 'vuex'
import axios from 'axios'
import key from '../static/key.json'

const store = () => new Vuex.Store({
  state: {
    keyword: 'ストア',
    gifs: []
  },
  mutations: {
    updateKeyword(state, val) {
      console.log('update')
      state.keyword = val
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
      console.log('api')
      const options = {
        method: 'get',
        url: `https://api.tenor.com/v1/search?tag=happy&key=${key.key}`,
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
