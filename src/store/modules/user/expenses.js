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
    async fetchExpenses({ commit }) {
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

    async fetchExpensesByUserId({ commit }, id) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/expenditure/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("SET_EXPENSES", [response.data]);
        return response.data;
      } catch (error) {
        console.error("Error fetching expenses by user ID:", error.response.data.msg);
        throw error;
      }
    },

    async createExpenses({ commit }, formKey) {
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
  },

  mutations: {
    SET_EXPENSES(state, expenses) {
      state.expenses = expenses;
    },
    ADD_EXPENSES(state, expenses) {
      state.expenses.push(expenses);
    },
  },
};

export default expenses;
