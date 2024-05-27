import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user: null,
    owner: null,
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
      console.log("User state updated:", user);
    },
    SET_OWNER(state, owner) {
      state.owner = owner;
      console.log("Owner state updated:", owner);
    },
  },
  actions: {
    async fetchOwner({ commit }, ownerId) {
      try {
        console.log(ownerId);
        const response = await axios.get(
          `http://127.0.0.1:5000/query_softwareowner/` + ownerId
        );
        commit("SET_OWNER", response.data);
        console.log("Owner fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching owner:", error);
      }
    },

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
    owner: (state) => state.owner,
  },
});

export default store;
