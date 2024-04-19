<template>
  <div class="container">
    <div
      class="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-8 py-6 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-50 dark:border-gray-700 mt-10 w-auto">
      <h1 class="text-lg font-bold mb-4"><b>Add Article</b></h1>
      <div class="pt-4">
        <form @submit.prevent="submitArticle">
          <div class="mb-6 pt-2">
            <label for="name" class="block mb-2 text-base font-medium text-gray-500 dark:text-black">Title</label>
            <input type="text" id="title" placeholder="Title" v-model="formKey.title"
              class="bg-white border text-base sm:text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="sub title" class="block mb-2 text-base font-medium text-gray-500 dark:text-black">Sub
              Title</label>
            <input type="text" id="sub_title" placeholder="Sub Title" v-model="formKey.sub_title"
              class="bg-white border-gray-500 text-base sm:text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Content</label>
            <textarea id="content" rows="4" v-model="formKey.content"
              class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-Black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Content"></textarea>
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </form>
      </div>
    </div>
    <div class="p-6 overflow-x-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <table class="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Title
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Sub Title
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Action
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in getArticle" :key="index">
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                    {{ article.title }}</p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {{ article.sub_title }}</p>
                </div>
              </div>
            </td>

            <!-- Edit -->
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <button @click="openUpdateModal(article)"
                  class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                  type="button">
                  <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                      class="h-5 w-5">
                      <path
                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                      </path>
                    </svg>
                  </span>
                </button>

                <!-- Modal content -->
                <div v-if="isModalOpenUpdate" id="update-modal" tabindex="-1" aria-hidden="true"
                  class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                  <div class="bg-opacity-50 absolute inset-0" @click="closeUpdateModal"></div>
                  <div class="relative p-4 w-full max-w-md">
                    <div class="relative bg-white rounded-lg shadow">
                      <div class="flex items-end justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-black dark:text-black">
                          Update Article
                        </h3>
                        <button @click="closeUpdateModal"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                      </div>
                      <form @submit.prevent="SubmitUpdateArticle" class="p-4">
                        <div class="grid gap-4 mb-4 grid-cols-2">
                          <div class="col-span-2">
                            <label for="title"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Title</label>
                            <input type="text" id="title" v-model="formKey.title"
                              class="bg-white border text-base sm:text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                          </div>
                          <div class="col-span-2">
                            <label for="sub_title"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Sub Title</label>
                            <input type="text" id="sub_title" v-model="formKey.sub_title"
                              class="bg-white border-gray-500 text-base sm:text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
                          </div>
                          <div class="col-span-2">
                            <label for="content"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Content</label>
                            <textarea id="content" rows="4" v-model="formKey.content"
                              class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Content"></textarea>
                          </div>
                        </div>
                        <button type="submit"
                          class="text-white flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"></path>
                          </svg>
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- /Edit -->

                <!-- Hapus -->
                <button @click="deleteArticle(article.id)"
                  class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-red-500  mt-2"
                  type="button">
                  <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                      class="h-7 w-7">
                      <path
                        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg>
                  </span>
                </button>
                <!-- /Hapus -->

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex';
  import Swal from 'sweetalert2';

  export default {
    data() {
      return {
        formKey: {
          title: '',
          sub_title: '',
          content: '',
        },
        isModalOpenUpdate: false,
        selectedArticleId: null
      }
    },

    computed: {
      ...mapGetters('article', ['getArticle']),
    },

    methods: {
      ...mapActions('article', ['fetchArticle', 'createArticle', 'fetchArticleById', 'updateArticle']),
      async submitArticle() {
        try {
          await this.createArticle(this.formKey);
          this.formKey = {
            title: '',
            sub_title: '',
            content: '',
          };
          Swal.fire('Sukses!', 'Berhasil menambahkan Article', 'success');
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat menambahkan Article'
          });
        }
      },

      // Admin

      async SubmitUpdateArticle() {
        try {
          const formKey = {
            title: this.formKey.title,
            sub_title: this.formKey.sub_title,
            content: this.formKey.content,
          };
          await this.updateArticle({
            id: this.selectedArticleId,
            formKey
          });
          this.fetchArticle();
          this.closeUpdateModal();
          Swal.fire('Sukses!', 'Berhasil memperbarui Article', 'success');
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat memperbarui Artikel!'
          });
        }
      },

      async openUpdateModal(article) {
        this.selectedArticleId = article.id; // Simpan ID pendapatan yang akan diperbarui
        this.fetchArticleById(article.id) // Memuat detail pendapatan
          .then(response => {
            // Isi nilai formKey dengan data pendapatan yang akan diperbarui
            this.formKey = {
              title: response.title,
              sub_title: response.sub_title,
              content: response.content
            };
            this.isModalOpenUpdate = true; // Tampilkan modal untuk mengedit pendapatan
          })
          .catch(error => {
            console.error("Error fetching article details:", error.response.data.msg);
          });
      },
      closeUpdateModal() {
        this.isModalOpenUpdate = false;
        this.selectedArticleId = null; // Setelah modal ditutup, reset ID pendapatan yang akan diperbarui
        this.formKey = { // Reset nilai formKey
          title: '',
          sub_title: '',
          content: '',
        };
      },
      //  /Update

      async deleteArticle(articleId) {
        try {
          const confirmed = await Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Anda tidak akan dapat mengembalikan ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          });

          if (confirmed.isConfirmed) {
            await this.$store.dispatch('article/deleteArticle', {
              id: articleId
            });
            Swal.fire(
              'Deleted!',
              'Your income has been deleted.',
              'success'
            );
            // Setelah menghapus, ambil ulang daftar pendapatan
            await this.fetchArticle();
          }
        } catch (error) {
          console.error("Error deleting income:", error.response.data.msg);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat menghapus pendapatan!'
          });
        }
      },

    },

    mounted() {
      this.fetchArticle();
    }
  };
</script>