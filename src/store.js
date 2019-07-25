import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let filters = {
  0: () => true,
  1: item => item.state === '已预约',
  2: item => item.state === '已取件',
  3: item => item.state === '未预约'
}

export default new Vuex.Store({
  state: {
    bookings: [],
    model: 0
  },
  getters: {
    getBookings (state) {
      return function () {
        return state.bookings.filter(filters[state.model])
      }
    }
  },
  mutations: {
    change (state, model) {
      state.model = model
    },
    push (state, value) {
      axios.post('http://localhost:8888/boss', value).then((response) => {
        state.bookings = response.data
      })
    },
    set (state, list) {
      state.bookings = list
    },
    update (state, value) {
      axios.put('http://localhost:8888/boss/id/' + value).then((response) => {
        state.bookings = response.data
      })
    },
    booked (state, value) {
      axios.put('http://localhost:8888/user/book-id/' + value.id + '?time=' + value.time).then((response) => {
        state.bookings = response.data
      })
    }
  },
  actions: {
    // push(store, value) {
    //   store.commit('store', value)
    // }
  }
})
