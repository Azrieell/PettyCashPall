<template>
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative mt-16">
    <div class="max-w-3xl mx-auto">
      <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div class="bg-white relative top-0 -mt-32 p-5 sm:p-10">
          <router-link :to="{ name: 'HomeMain' }" class="text-gray-600 text-sm" replace>&larr; Back to Home
          </router-link>
          <h1 href="#" class="text-gray-900 font-bold text-3xl mb-2 mt-5">{{ singleArticle?.title }}</h1>
          <p class="text-gray-700 text-sm mt-2"> {{ singleArticle?.sub_title }}
          </p>
          <p class="text-base leading-8 my-5">
            {{ singleArticle?.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        singleArticle: {}
      }
    },

    methods: {
      ...mapActions('article', ['fetchArticleById']),
      async fetchArticle() {
        try {
          this.singleArticle = response;
        } catch (error) {
          console.error('Error fetching article:', error);
        }
      }
    },

    mounted() {
      this.fetchArticle();
    }
  }
</script>