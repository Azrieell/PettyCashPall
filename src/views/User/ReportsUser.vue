<template>
  <div class="flex justify-center">
    <div class="p-8 w-full md:w-auto">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-8 font-montserrat">Add categories & tags</h1>
        <h3 class="text-lg mb-5 font-montserrat">Incomes</h3>
        <!-- Grid untuk kartu -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 mt-8">
          <!-- Card pertama -->
          <div v-for="(categories, index) in getIncomesCategories" :key="index"
            class="group relative cursor-pointer overflow-hidden bg-white border px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span
              class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span
                class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                  class="bi bi-tag text-white" viewBox="0 0 16 16">
                  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" />
                  <path
                    d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z" />
                </svg>
              </span>
              <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 text-center">
                <p class="text-lg">Tag</p>
                <p class="text-sm">{{ categories.income_category }}</p>
              </div>
            </div>
          </div>

          <!-- Add Categories Income -->
          <div
            class="group relative cursor-pointer overflow-hidden bg-white border px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
            @click="openCategoryModal">

            <span
              class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span
                class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                  class="bi bi-plus-lg text-white" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
              </span>
              <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 text-center">
                <p class="text-lg">Add</p>
                <p class="text-sm">Categories</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Modals ADD incomes -->
        <div v-if="isCategoryModalOpen" id="category-edit-modal" tabindex="-1" aria-hidden="true"
          class="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div class="relative p-4 w-full max-w-md">
            <div class="relative bg-white rounded-lg shadow">
              <div class="flex items-center justify-between p-4 border-b">
                <h3 class="text-xl font-semibold text-gray-900">Add Category Incomes</h3>
                <button @click="closeCategoryModal" type="button"
                  class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 inline-flex justify-center items-center">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div class="p-4 mb-5">
                <form @submit.prevent="submitCategories" class="space-y-4">
                  <div>
                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Category</label>
                    <input type="name" name="income_category" id="income_category"
                      v-model="categoryData.income_category" placeholder="Your current Category"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                      required />
                  </div>
                  <button type="submit"
                    class="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-white w-full">SAVE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Akhir Modals ADD incomes -->
        <hr class="border-gray-400 mb-10">

        <h3 class="text-lg mb-5 font-montserrat">Expenses</h3>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 mt-8">

          <!-- Card Pertama -->
          <div v-for="(categories, index) in getExpensesCategories" :key="index"
            class="group relative cursor-pointer overflow-hidden bg-white border px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span
              class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span
                class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                  class="bi bi-tag text-white" viewBox="0 0 16 16">
                  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" />
                  <path
                    d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z" />
                </svg>
              </span>
              <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 text-center">
                <p class="text-lg">Tag</p>
                <p class="text-sm">{{ categories.expenditure_category }}</p>
              </div>
            </div>
          </div>

          <div
            class="group relative cursor-pointer overflow-hidden bg-white border px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
            @click="openCategoryExpensesModal">
            <span
              class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span
                class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                  class="bi bi-plus-lg text-white" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
              </span>
              <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 text-center">
                <p class="text-lg">Add</p>
                <p class="text-sm">Expenses</p>
              </div>
            </div>
          </div>

          <!-- Modals ADD expenses -->
          <div v-if="isCategoryExpensesModalOpen" id="categoryexpenses-edit-modal" tabindex="-1" aria-hidden="true"
            class="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-black bg-opacity-50"
            @click.stop="">
            <div class="relative p-4 w-full max-w-md">
              <div class="relative bg-white rounded-lg shadow">
                <div class="flex items-center justify-between p-4 border-b">
                  <h3 class="text-xl font-semibold text-gray-900">Add Category Expenses</h3>
                  <button @click="closeCategoryExpensesModal" type="button"
                    class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 inline-flex justify-center items-center">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <div class="p-4 mb-5">
                  <form @submit.prevent="submitCategories" class="space-y-4">
                    <div>
                      <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Category</label>
                      <input type="text" name="expenditure_category" id="expenditure_category"
                        v-model="categoryData.expenditure_category" placeholder="Your current Category"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                        required />
                    </div>
                    <button type="submit"
                      class="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-white w-full">SAVE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- Akhir Modals ADD expenses -->
        </div>
        <h1 class="text-2xl font-bold mb-8 font-montserrat mt-10">Reports</h1>
        <div class="flex flex-col justify-center relative overflow-hidden sm:py-12">
          <div class="max-w-7xl mx-auto">
            <div class="relative group">
              <div
                class="absolute -inset-1 bg-gradient-to-r to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
              </div>
              <div
                class="relative px-7 py-6 bg-white ring-1 ring-gray-900/55 rounded-lg leading-none flex flex-col items-center justify-start space-y-4">
                <p class="text-slate-800">Format</p>
                <div class="flex items-center space-x-4">
                  <button type="button"
                    class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">EXCEL</button>
                  <span><button type="button"
                      class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">PDF</button></span>
                </div>
                <hr class="border-gray-300 w-full my-4">
                <p>Include</p>
                <div class="flex justify-center -pl-0 sm:pl-20">
                  <div class="flex-initial sm:w-64">
                    <div class="flex items-center mb-4">
                      <input id="default-checkbox-1" type="checkbox" value="expenses" name="default-checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="default-checkbox-1"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-black">Expenses</label>
                    </div>
                  </div>
                  <div class="flex-initial sm:w-72">
                    <div class="flex items-center">
                      <input id="default-checkbox-2" type="checkbox" value="incomes" name="default-checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="default-checkbox-2"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-black">Incomes</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-center mt-5">
                <button
                  class="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                  <span>GENERATE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Swal from 'sweetalert2';
  import {
    mapActions,
    mapGetters
  } from 'vuex';

  export default {
    data() {
      return {
        categoryData: {
          income_category: '',
          expenditure_category: '',
        },
        isCategoryModalOpen: false,
        isCategoryExpensesModalOpen: false
      };
    },

    computed: {
      ...mapGetters('categories', ['getIncomesCategories', 'getExpensesCategories'])
    },

    methods: {
      ...mapActions('categories', ['fetchCategories', 'createIncomeCategory', 'createExpensesCategory']),
      async submitCategories() {
        try {
          if (this.categoryData.income_category) {
            await this.createIncomeCategory(this.categoryData);
            Swal.fire('Success!', 'Successfully added income category', 'success').then(() => {
              this.closeCategoryModal(); // Ubah ini untuk menutup modal kategori pendapatan (incomes)
            });
          } else if (this.categoryData.expenditure_category) {
            await this.createExpensesCategory(this.categoryData);
            Swal.fire('Success!', 'Successfully added expenditure category', 'success').then(() => {
              this.closeCategoryExpensesModal(); // Ubah ini untuk menutup modal kategori pengeluaran (expenses)
            });
          }

          this.categoryData = {
            income_category: '',
            expenditure_category: ''
          };

          this.fetchCategories();
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An error occurred while adding categories!'
          });
        }
      },
      openCategoryModal() {
        this.isCategoryModalOpen = true;
      },
      closeCategoryModal() {
        this.isCategoryModalOpen = false;
      },
      openCategoryExpensesModal() {
        this.isCategoryExpensesModalOpen = true;
      },
      closeCategoryExpensesModal() {
        this.isCategoryExpensesModalOpen = false;
      },
    },

    mounted() {
      this.fetchCategories();
    }
  }
</script>