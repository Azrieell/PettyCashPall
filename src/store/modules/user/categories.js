import axios from "axios";

const categories = {
  namespaced: true,
  state: {
    incomesCategories: [],
    expensesCategories: [],
  },
  getters: {
    getIncomesCategories: (state) => state.incomesCategories,
    getExpensesCategories: (state) => state.expensesCategories
  },
  actions: {
    async fetchCategories({
      commit
    }) {
      try {
        const token = localStorage.getItem("token");

        // Fetch incomes categories
        const incomesResponse = await axios.get("/category/incomes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Fetch expenditure categories
        const expensesResponse = await axios.get("/category/expenditure", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Commit mutations to set incomes and expenditure categories
        commit("SET_INCOMES_CATEGORIES", incomesResponse.data);
        commit("SET_EXPENDITURE_CATEGORIES", expensesResponse.data);

        return {
          incomes: incomesResponse.data,
          expenses: expensesResponse.data
        };
      } catch (error) {
        console.error("Error fetching categories:", error.response.data.msg);
        throw error;
      }
    },


    async createIncomeCategory({
      commit
    }, categoryData) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post("/category/incomes/add", categoryData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("ADD_CATEGORY_INCOME", response.data);
        return response.data;
      } catch (error) {
        console.error("Error creating income category:", error.response.data.msg);
        throw error;
      }
    },
    async createExpensesCategory({
      commit
    }, categoryData) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post("/category/expenditure/add", categoryData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("ADD_CATEGORY_EXPENSES", response.data);
        return response.data;
      } catch (error) {
        console.error("Error creating expense category:", error.response.data.msg);
        throw error;
      }
    },


  },
  mutations: {
    SET_INCOMES_CATEGORIES(state, categories) {
      state.incomesCategories = categories;
    },
    SET_EXPENDITURE_CATEGORIES(state, categories) {
      state.expensesCategories = categories;
    },
    ADD_CATEGORY_INCOME(state, category) {
      state.incomesCategories.push(category);
    },
    ADD_CATEGORY_EXPENSE(state, category) {
      state.expensesCategories.push(category);
    }
  },
};

export default categories;