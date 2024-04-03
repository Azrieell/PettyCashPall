import axios from "axios";

const incomes = {
  namespaced: true,
  state: {
    incomes: [],
  },

  getters: {
    getIncomes: (state) => state.incomes,
  },
  actions: {
    async fetchIncomes({
      commit
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/incomes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("SET_INCOMES", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching incomes:", error.response.data.msg);
        throw error;
      }
    },

    async fetchIncomesByUserId({
      commit
    }, id) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/incomes/user/${id}`, { // Mengubah endpoint URL
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("SET_INCOMES", [response.data]); // Menggunakan mutasi SET_INCOMES untuk menyimpan data
        return response.data;
      } catch (error) {
        console.error("Error fetching incomes by user ID:", error.response.data.msg);
        throw error;
      }
    },


    async createIncomes({
      commit
    }, formKey) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post("/incomes/add", formKey, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("ADD_INCOME", response.data);
        return response.data;
      } catch (error) {
        console.error("Error creating incomes:", error.response.data.msg);
        throw error;
      }
    },
  },

  mutations: {
    SET_INCOMES(state, incomes) {
      state.incomes = incomes;
    },
    ADD_INCOME(state, income) {
      state.incomes.push(income);
    }
  }

};

export default incomes;