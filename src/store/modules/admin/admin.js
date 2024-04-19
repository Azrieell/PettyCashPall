import axios from "axios";

const admin = {
  namespaced: true,
  state: {
    admin: [],
  },

  getters: {
    getAdmin: (state) => state.admin
  },
  actions : {
    async fetchAdmin({
      commit
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("SET_ADMIN", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching user:", error.response.data.msg);
        throw error;
      }
    },

    async createAdmin({
      commit
    }, formKey) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post("/admin/add", formKey, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("ADD_ADMIN", response.data);
        return response.data;
      } catch (error) {
        console.error("Error creating admin:", error.response.data.msg);
        throw error;
      }
    },


    async deleteAdmin({
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
        console.error("Error deleting admin account:", error.response.data.msg);
        throw error;
      }
    }
    

  },
  
  mutations: {
    SET_ADMIN(state, admin) {
      state.admin = admin;
    },
    ADD_ADMIN(state, admin) {
      state.admin.push(admin);
    },
  }
}

export default admin;