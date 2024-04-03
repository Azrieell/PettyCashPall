import { createStore } from "vuex";
import auth from "./modules/auth/auth.js";
import incomes from "./modules/user/incomes.js";
import expenses from "./modules/user/expenses";
import categories from "./modules/user/categories.js";

const store = createStore({
  state: {
    isLoading : false,
  },
  modules: {
    auth,
    incomes,
    expenses,
    categories
  },
});

export default store;