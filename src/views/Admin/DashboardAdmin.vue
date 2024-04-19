<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:py-6 lg:px-8">
    <h1 class="text-xl font-bold font-montserrat text-center mb-10">Dashboard ADMIN</h1>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900 max-w-xs">
        <div class="px-4 py-5 sm:p-6">
          <dl>
            <dt class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total Users</dt>
            <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">{{ filteredUser.length }}</dd>
          </dl>
        </div>
      </div>
      <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900 max-w-xs">
        <div class="px-4 py-5 sm:p-6">
          <dl>
            <dt class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total Admin</dt>
            <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">{{ filteredAdmin.length }}</dd>
          </dl>
        </div>
      </div>
      <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900 max-w-xs">
        <div class="px-4 py-5 sm:p-6">
          <dl>
            <dt class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Article</dt>
            <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">{{ getArticle.length }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('user', ['getUser']),
      ...mapGetters('article', ['getArticle']),

      filteredUser() {
        return this.getUser.filter(user => user.role === 'user');
      },
      filteredAdmin() {
        return this.getUser.filter(user => user.role === 'admin');
      }
    },

    methods: {
      ...mapActions('user', ['fetchUser']),
      ...mapActions('article', ['fetchArticle'])
    },

    mounted() {
      this.fetchUser();
      this.fetchArticle();
    }
  }
</script>
