import {
  createWebHistory,
  createRouter
} from "vue-router";
import MainLayout from "../layouts/MainLayouts.vue";
import UserLayout from "../layouts/UserLayouts.vue";
import AdminLayout from "../layouts/AdminLayouts.vue";
import HomeMain from "../views/Main/HomeMain.vue";
import Login from "../views/Auth/Login.vue";
import SignUp from "../views/Auth/SignUp.vue";
import DashboardUser from "../views/User/DashboardUser.vue";
import IncomesUser from "../views/User/IncomesUser.vue";
import ExpensesUser from "../views/User/ExpensesUser.vue";
import ReportsUser from "../views/User/ReportsUser.vue";
import ProfileUser from "../views/User/ProfileUser.vue";
import DashboardAdmin from "../views/Admin/DashboardAdmin.vue";
import ArticleAdmin from "../views/Admin/ArticleAdmin.vue";

import store from "../store"; // import store

const routes = [{
    path: "/",
    component: MainLayout,
    children: [{
      path: "",
      component: HomeMain,
      name: "HomeMain",
      meta: {
        title: "Personal finance budget and expense tracker",
      },
    }, ],
  },
  {
    path: "/user/overview",
    component: UserLayout,
    children: [{
        path: "",
        component: DashboardUser,
        name: "DashboardUser",
        meta: {
          title: "Dashboard",
          requiresAuth: true,
          role: "user", // Tambahkan pengecekan role
        },
      },
      {
        path: "/user/incomes",
        component: IncomesUser,
        name: "IncomesUser",
        meta: {
          title: "Incomes",
          requiresAuth: true,
          role: "user", // Tambahkan pengecekan role
        },
      },
      {
        path: "/user/expenses",
        component: ExpensesUser,
        name: "ExpensesUser",
        meta: {
          title: "Expenditure",
          requiresAuth: true,
          role: "user", // Tambahkan pengecekan role
        },
      },
      {
        path: "/user/reports",
        component: ReportsUser,
        name: "ReportsUser",
        meta: {
          title: "Reports",
          requiresAuth: true,
          role: "user", // Tambahkan pengecekan role
        },
      },
      {
        path: "/user/profile",
        component: ProfileUser,
        name: "ProfileUser",
        meta: {
          title: "Profile",
          requiresAuth: true,
          role: "user", // Tambahkan pengecekan role
        },
      },
    ],
  },

  {
    path: "/admin/dashboard",
    component: AdminLayout,
    children: [{
        path: "",
        component: DashboardAdmin,
        name: "DashboardAdmin",
        meta: {
          title: "Dashboard Admin",
          requiresAuth: true,
          role: "admin", // Tambahkan pengecekan role
        },
      },
      {
        path: "/admin/article",
        component: ArticleAdmin,
        name: "ArticleAdmin",
        meta: {
          title: "Article",
          requiresAuth: true,
          role: "admin", // Tambahkan pengecekan role
        },
      },
    ],
  },

  {
    path: "/auth/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
    beforeEnter: (to, from, next) => {
      const isAuthenticated = store.getters["auth/isAuthenticated"];
      if (isAuthenticated) {
        const userRole = store.getters["auth/getMe"].role;
        if (userRole === "user") {
          next("/user/overview"); // Jika role adalah user, arahkan ke halaman user
        } else if (userRole === "admin") {
          next("/admin/dashboard"); // Jika role adalah admin, arahkan ke halaman admin
        }
      } else {
        next(); // Lanjutkan jika belum autentikasi
      }
    },
  },
  {
    path: "/auth/register",
    name: "SignUp",
    component: SignUp,
    meta: {
      title: "Sign Up",
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  const requiresAuth = to.meta.requiresAuth;
  const userRole = store.state.auth.role; // Mendapatkan peran pengguna dari store

  // Jika rute memerlukan otentikasi dan pengguna belum terotentikasi
  if (requiresAuth && !isAuthenticated) {
    next({
      name: "Login"
    }); // Redirect ke halaman login
  } else if (to.path.includes("/admin/") && userRole === "user") {
    // Jika pengguna dengan peran "user" mencoba mengakses rute admin
    next({
      name: "DashboardUser"
    }); // Redirect ke halaman dashboard pengguna
  } else {
    next(); // Lanjutkan navigasi ke rute yang diminta
  }
});

export default router;