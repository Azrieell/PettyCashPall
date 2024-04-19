import axios from "axios";

const expenses = {
  namespaced: true,
  state: {
    expenses: [],
  },

  getters: {
    getExpenses: (state) => state.expenses,
  },

  actions: {
    async fetchExpenses({
      commit
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/expenditure", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("SET_EXPENSES", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching expenses:", error.response.data.msg);
        throw error;
      }
    },

    async fetchExpensesById({
      commit
    }, id) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/expenditure/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching expenses by ID:", error.response.data.msg);
        throw error;
      }
    },

    async createExpenses({
      commit
    }, formKey) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post("/expenditure/add", formKey, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("ADD_EXPENSES", response.data);
        return response.data;
      } catch (error) {
        console.error("Error creating expenses:", error.response.data.msg);
        throw error;
      }
    },

    async updateExpenses({
      commit
    }, {
      id,
      formKey
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.patch(`/expenditure/edit/${id}`, formKey, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Perbarui data di store setelah update berhasil
        commit("UPDATE_EXPENSES", response.data);
        return response.data;
      } catch (error) {
        console.error("Error updating expenses:", error.response.data.msg);
        throw error;
      }
    },

    async deleteExpenses({
      commit
    },  {
      id
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(`/expenditure/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error deleting expenses:", error.response.data.msg);
        throw error;
      }
    }

  },

  mutations: {
    SET_EXPENSES(state, expenses) {
      state.expenses = expenses;
    },
    ADD_EXPENSES(state, expenses) {
      state.expenses.push(expenses);
    },
    UPDATE_EXPENSES(state, updatedExpenses) {
      const index = state.expenses.findIndex(expense => expense.id === updatedExpenses.id);
      if (index !== -1) {
        state.expenses.splice(index, 1, updatedExpenses);
      }
    }
  },
};

export default expenses;