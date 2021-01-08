import axios from 'axios'
export default({
    namespaced: true,
    state: {
        info: null
      },
      getters: {
        info (state){
            return state.info
        }
      },
      mutations: {
        SET_INFO(state, data){
            state.info = data
        }
      },
      actions: {
        async getInfo({commit}){
            try {
                let response = await axios.get('https://hirng-x2021.glitch.me/api')
                commit ('SET_INFO', response.data)
            } catch (e) {
                commit('SET_INFO', null)
            }
          },
      }
  })