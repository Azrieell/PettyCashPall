<template>
  <button id="sidebarToggle"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    @click="toggleSidebar">
    <span class="sr-only">Buka sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
      </path>
    </svg>
  </button>

  <aside id="sidebar-multi-level-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform -translate-x-full sm:translate-x-0">
    <div class="h-full px-3 py-4 overflow-y-auto bg-white border">
      <span class="font-bold ml-7 mt-5 text-xl block">PettyCashPall</span>
      <ul class="space-y-2 font-medium mt-5">
        <router-link to="/user/overview">
          <li class="mb-5">
            <a href="#"
              class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-10">
              <svg
                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path
                  d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path
                  d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span class="ms-3 text-black">Overview</span>
            </a>
          </li>
        </router-link>
        <router-link to="/user/incomes">
          <li class="mb-5">
            <a href="#"
              class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-plus-circle-fill flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 16 16">
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap text-black">Incomes</span>
            </a>
          </li>
        </router-link>
        <router-link to="/user/expenses">
          <li class="mb-5">
            <a href="#"
              class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-dash-circle-fill flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap text-black">Expenses</span>
            </a>
          </li>
        </router-link>
        <router-link to="/user/reports">
          <li class="mb-5">
            <a href="#"
              class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-tags-fill flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 16 16">
                <path
                  d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                <path
                  d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z" />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap text-black">Category & Reports</span>
            </a>
          </li>
        </router-link>
        <router-link to="/user/profile">
          <li class="mb-5">
            <a href="#"
              class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-person-fill flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap text-black">Profile</span>
            </a>
          </li>
        </router-link>
        <li class="mb-5">
          <a href="#" @click="logoutHandler"
            class="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap text-black">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import {
    mapActions
  } from 'vuex';

  export default {
    methods: {
      ...mapActions('auth', ['logout']),
      logoutHandler() {
        // Panggil aksi logout dari store saat tombol logout diklik
        this.$store.dispatch('auth/logout') // Ubah mapActions menjadi this.$store.dispatch
          .then((success) => {
            if (success) {
              this.$router.push('/'); 
            }
          })
          .catch((error) => {
            console.error('Logout error:', error);
          });
      },
      addSidebarListeners() {
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar-multi-level-sidebar');

        const closeSidebar = () => {
          if (window.innerWidth < 640) {
            sidebar.classList.add('-translate-x-full');
          }
        };

        sidebarToggle.addEventListener('click', () => {
          sidebar.classList.toggle('-translate-x-full');
        });

        const sidebarElements = sidebar.querySelectorAll('a');

        sidebarElements.forEach((element) => {
          element.addEventListener('click', closeSidebar);
        });
      },
    },
  };
</script>


<style>
  * {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  .transition-transform {
    transition-property: transform;
    transition-duration: 0.3s;
    /* Adjust duration as needed */
    transition-timing-function: ease-out;
    /* Adjust timing function as needed */
  }
</style>