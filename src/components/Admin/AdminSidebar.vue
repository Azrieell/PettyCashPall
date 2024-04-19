<template>
  <div>
    <button @click="toggleSidebar" class="absolute top-5 right-5 z-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd"
          d="M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm16 8a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h14a1 1 0 0 1 1 1zm-6-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          clip-rule="evenodd" />
      </svg>
    </button>
    <aside
      :class="{'translate-x-0': sidebarOpen, '-translate-x-full': !sidebarOpen, 'ease-out': sidebarOpen, 'ease-in': !sidebarOpen}"
      class="fixed inset-y-0 left-0 p-7 w-60 bg-white border-r dark:bg-gray-900 dark:border-gray-700 transition-transform duration-300 transform">
      <a href="#">
        <img class="w-auto h-7" src="https://merakiui.com/images/logo.svg" alt="">
      </a>

      <div class="flex flex-col justify-between flex-1 mt-6">
        <nav class="-mx-3 space-y-6">
          <div class="space-y-3 ">
            <router-link to="/admin/dashboard">
              <a class="flex items-center mb-5 mt-5 px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
                <span class="mx-2 text-base font-medium">Dashboard</span>
              </a>
            </router-link>

            <router-link to="/admin/article">
              <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 mb-6"
                href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                  class="bi bi-newspaper" viewBox="0 0 16 16">
                  <path
                    d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                  <path
                    d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                </svg>
                <span class="mx-2 text-base font-medium">Article</span>
              </a>
            </router-link>

            <router-link to="/admin/datausers">
            <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 mt-6"
              href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-people"
                viewBox="0 0 16 16">
                <path
                  d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
              </svg>
              <span class="mx-2 text-base font-medium">Data Users</span>
            </a>
          </router-link>

            <router-link to="/admin/dataadmin">
              <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 mt-6"
                href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <span class="mx-2 text-base font-medium">Data Admin</span>
              </a>
            </router-link>
          </div>

          <div class="space-y-3 ">
            <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">LogOut</label>

            <a class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#" @click="logoutHandler">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                <path fill-rule="evenodd"
                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
              </svg>
              <span class="mx-2 text-sm font-medium">LogOut</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex';
  export default {
    data() {
      return {
        sidebarOpen: true // Sidebar akan terbuka secara default saat pertama kali masuk
      };
    },
    methods: {
      ...mapActions('auth', ['logout']),
      logoutHandler() {
        console.log('Calling logout action');
        this.$store.dispatch('auth/logout')
          .then((success) => {
            console.log('Logout success:', success);
            if (success) {
              this.$router.push('/');
            }
          })
          .catch((error) => {
            console.error('Logout error:', error);
          });
      },
      toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen; // Toggles the sidebarOpen variable
      }
    }
  };
</script>