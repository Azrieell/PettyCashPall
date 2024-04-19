import axios from "axios";

const user = {
  namespaced: true,
  state: {
    user: [],
  },

  getters: {
    getUser: (state) => state.user,
  },

  actions: {
    async fetchUser({
      commit
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("SET_USER", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching user:", error.response.data.msg);
        throw error;
      }
    },

    async createUser({
      commit
    }, formKey) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post("/auth/register", formKey, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("ADD_USER", response.data);
        return response.data;
      } catch (error) {
        console.error("Error creating user:", error.response.data.msg);
        throw error;
      }
    },

    async deleteUser({
      commit
    }, {
      uuid // Menggunakan 'uuid' sebagai kunci
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(`/users/delete/${uuid}`, { // Menggunakan 'uuid' sebagai parameter
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error deleting user account:", error.response.data.msg);
        throw error;
      }
    }    
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    ADD_USER(state, user) {
      state.user.push(user);
    },
  },
};

export default user;