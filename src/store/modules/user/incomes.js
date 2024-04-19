import axios from "axios";

const incomes = {
  namespaced: true,
  state: {
    incomes: [],
    selectedincome: []
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

    async fetchIncomeById({
      commit
    }, id) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/incomes/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("SET_SELECTED_INCOME", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching income by ID:", error.response.data.msg);
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

    async updateIncomes({
      commit
    }, {
      id,
      formKey
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.patch(`/incomes/edit/${id}`, formKey, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Perbarui data di store setelah update berhasil
        commit("UPDATE_INCOME", response.data);
        return response.data;
      } catch (error) {
        console.error("Error updating incomes:", error.response.data.msg);
        throw error;
      }
    },

    async deleteIncomes({
      commit
    },  {
      id
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(`/incomes/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error deleting incomes:", error.response.data.msg);
        throw error;
      }
    }
  },

  mutations: {
    SET_INCOMES(state, income) {
      state.incomes = income;
    },
    ADD_INCOME(state, income) {
      state.incomes.push(income);
    },
    SET_SELECTED_INCOME(state, income) {
      state.selectedincome = income;
    },
    UPDATE_INCOME(state, updatedIncome) {
      // Cari indeks dari pendapatan yang akan diupdate
      const index = state.incomes.findIndex(income => income.id === updatedIncome.id);
      // Jika indeks ditemukan, update data pada indeks tersebut dengan data yang baru
      if (index !== -1) {
        state.incomes.splice(index, 1, updatedIncome);
      }
    }
  }

};

export default incomes;