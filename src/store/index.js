import { createStore } from "vuex";
import auth from "./modules/auth/auth.js";
import incomes from "./modules/user/incomes.js";
import expenses from "./modules/user/expenses";
import categories from "./modules/user/categories.js";
import admin from "./modules/admin/admin.js";
import user from "./modules/admin/user.js";
import article from "./modules/admin/article.js";

const store = createStore({
  state: {
    isLoading : false,
  },
  modules: {
    auth,
    incomes,
    expenses,
    categories,
    admin,
    user,
    article
  },
});

export default store;