import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      console.log("User state updated:", user);
    },
  },
  actions: {
    async fetchUser({ commit }, userId) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/query_user/` + userId
        );
        commit("SET_USER", response.data);
        console.log("User fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    },
  },
  getters: {
    user: (state) => state.user,
  },
});

export default store;
