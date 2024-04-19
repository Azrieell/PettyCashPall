<template>
  <div class="flex justify-center">
    <div class="p-8 w-full md:w-auto">
      <div class="container mx-auto">
        <h1 class="text-xl font-bold mb-5 font-montserrat">Expenses</h1>

        <!-- Card -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-8">
          <div class="flex justify-center max-w-xs rounded-xl overflow-hidden shadow-xl bg-gray-900">
            <div class="px-6 py-4 flex justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wallet2"
                viewBox="0 0 16 16" style="color: #98DD53;">
                <path
                  d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
              </svg>
              <div>
                <div class="font-bold text-sm text-white mb-1 ml-4" style="font-family: 'Montserrat', sans-serif;">
                  Total Expenses</div>
                <p class="text-white text-xl ml-4">Rp. {{ calculateTotalExpenses.toLocaleString('id-ID') }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Akhir -->

        <!-- Awal History -->
        <h1 class="text-xl font-bold" style="font-family: 'Montserrat', sans-serif;">Overall Revenue</h1>
        <section class="py-2 bg-blueGray-50">
          <div class="xl:w-12/12 mb-12 xl:mb-0 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base text-blueGray-700">Latest</h3>
                  </div>
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-end">
                    <button @click="generateExcel"
                      class="bg-gray-900 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                      type="button">Convert To Excel</button>
                    <button @click="openModal"
                      class="bg-gray-900 ml-5 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                      type="button">Add Expenses</button>
                    <div v-if="isModalOpen" id="crud-modal" tabindex="-1" aria-hidden="true"
                      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                      <div class="bg-opacity-50 bg-black absolute inset-0" @click="closeModal"></div>
                      <div class="relative p-4 w-full max-w-md">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow">
                          <!-- Modal header -->
                          <div class="flex items-end justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-black dark:text-black">
                              Add Expenses
                            </h3>
                            <button @click="closeModal"
                              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                              </svg>
                              <span class="sr-only">Close modal</span>
                            </button>
                          </div>
                          <!-- Modal body -->
                          <form @submit.prevent="submitExpenses" class="p-4">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                              <div class="col-span-2 relative">
                                <label for="price"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Money</label>
                                <div class="relative">
                                  <span
                                    class="absolute left-0 inset-y-0 flex items-center pl-2 text-gray-500 dark:text-black">
                                    Rp.
                                  </span>
                                  <input type="number" name="total_expenditure" id="total_expenditure" value="0" min="0"
                                    v-model="formkey.total_expenditure"
                                    class="pl-10 bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required="">
                                </div>
                              </div>
                              <div class="col-span-2 relative">
                                <label for="money"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Date</label>
                                <div class="relative">
                                  <input type="date" name="date" id="date_expenditure" value="0" min="0"
                                    v-model="formkey.date_expenditure"
                                    class=" bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required="">
                                </div>
                              </div>

                              <label for="category"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Choose
                                Category</label>
                              <select id="incomeCategory" v-model="formkey.category"
                                class="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option disabled value="">Pilih kategori</option>
                                <option v-for="category in getExpensesCategories" :key="category.id"
                                  :value="category.expenditure_category">
                                  {{ category.expenditure_category }}
                                </option>
                              </select>

                              <div class="col-span-2">
                                <label for="description"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                  Description</label>
                                <textarea id="description_expenditure" rows="4"
                                  v-model="formkey.description_expenditure"
                                  class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-Black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Description"></textarea>
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
                  </div>
                </div>
              </div>

              <!-- Awal History -->
              <div class="block w-full overflow-x-auto border">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Expenses
                      </th>
                      <th scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Edit
                      </th>
                      <th scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Details
                      </th>
                      <th scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(expenses, index) in getExpenses" :key="index">
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        Rp. {{ expenses.total_expenditure.toLocaleString('id-ID') }}
                      </td>
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{ expenses.date_expenditure }}
                      </td>
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{ expenses.category }}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {{ expenses.description_expenditure }}
                      </td>

                      <!-- Edit -->
                      <td>
                        <button @click="openUpdateModal(expenses)"
                          class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded ml-5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path
                              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                          </svg>
                        </button>
                      </td>

                      <div v-if="isModalOpenUpdate" id="update-modal" tabindex="-1" aria-hidden="true"
                        class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                        <div class="bg-opacity-50 bg-black absolute inset-0" @click="closeModal"></div>
                        <div class="relative p-4 w-full max-w-md">
                          <!-- Modal content -->
                          <div class="relative bg-white rounded-lg shadow">
                            <!-- Modal header -->
                            <div class="flex items-end justify-between p-4 border-b rounded-t dark:border-gray-600">
                              <h3 class="text-lg font-semibold text-black dark:text-black">
                                Update Expenses
                              </h3>
                              <button @click="closeUpdateModal"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                  viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                              </button>
                            </div>
                            <!-- Modal body -->
                            <form @submit.prevent="submitUpdateExpenses" class="p-4">
                              <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2 relative">
                                  <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Money</label>
                                  <div class="relative">
                                    <span
                                      class="absolute left-0 inset-y-0 flex items-center pl-2 text-gray-500 dark:text-black">
                                      Rp.
                                    </span>
                                    <input type="number" name="total_expenditure" id="total_expenditure" value="0"
                                      min="0" v-model="formkey.total_expenditure"
                                      class="pl-10 bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      required="">
                                  </div>
                                </div>
                                <div class="col-span-2 relative">
                                  <label for="money"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Date</label>
                                  <div class="relative">
                                    <input type="date" name="date" id="date_expenditure" value="0" min="0"
                                      v-model="formkey.date_expenditure"
                                      class=" bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      required="">
                                  </div>
                                </div>
                                <div class="col-span-2">
                                  <label for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                    Description</label>
                                  <textarea id="description_expenditure" rows="4"
                                    v-model="formkey.description_expenditure"
                                    class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-Black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Description"></textarea>
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

                      <!-- Show -->
                      <td>
                        <button @click="openShowModalDetails(expenses)"
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded ml-8">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path
                              d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                          </svg>
                        </button>
                      </td>

                      <!-- Show Modal -->
                      <div v-if="isModalShowExpensesOpen" id="show-expenses-modal" tabindex="-1" aria-hidden="true"
                        class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                        <div class="fixed inset-0 opacity-50 backdrop-filter backdrop-blur-sm"
                          @click="closeShowModalExpensesDetail">
                        </div>
                        <div class="relative p-4 w-full max-w-2xl">
                          <!-- Modal content -->
                          <div class="relative bg-white rounded-lg shadow">
                            <!-- Modal header -->
                            <div class="flex items-center justify-between p-4 border-b rounded-t">
                              <h3 class="text-xl font-semibold text-gray-900">Expenses Details</h3>
                              <button @click="closeShowModalExpensesDetail"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                  viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                              </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-4 space-y-4">
                              <p class="text-base leading-relaxed text-gray-500">Total Expenses: Rp.
                                {{ selectedExpenses.total_expenditure }}</p>
                              <p class="text-base leading-relaxed text-gray-500">Date:
                                {{ selectedExpenses.date_expenditure }}</p>
                              <p class="text-base leading-relaxed text-gray-500">Description:
                                {{ selectedExpenses.description_expenditure }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Show Modal -->

                      <td>
                        <button @click="deleteExpenses(expenses.id)"
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded ml-8">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path
                              d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </section>
        <!-- Akhir History -->

      </div>
    </div>
  </div>
</template>

<script>
  import * as XLSX from 'xlsx';
  import Swal from 'sweetalert2';
  import {
    mapActions,
    mapGetters
  } from 'vuex';

  export default {
    data() {
      return {
        formkey: {
          total_expenditure: '',
          date_expenditure: '',
          description_expenditure: '',
          category: '',
        },
        categoryData: {
          expenditure_category: '',
        },
        isModalOpen: false,
        isModalShowExpensesOpen: false,
        isModalOpenUpdate: false,
        selectedExpenses: {},
        selectedExpensesId: null,
      };
    },

    computed: {
      ...mapGetters('expenses', ['getExpenses']),
      ...mapGetters('categories', ['getExpensesCategories']),
      calculateTotalExpenses() {
        return this.getExpenses.reduce((total, expenses) => total + expenses.total_expenditure, 0);
      },
      calculateTotalIncome() {
        return this.$store.getters['incomes/getIncomes'].reduce((total, income) => total + income.total_income, 0);
      }
    },

    methods: {
      ...mapActions('expenses', ['fetchExpenses', 'createExpenses', 'fetchExpensesById', 'updateExpenses']),
      ...mapActions('categories', ['fetchCategories']),

      async fetchExpenses() {
        try {
          await this.$store.dispatch('expenses/fetchExpenses');
          const expenses = this.getExpenses;

          // Ambil kategori pendapatan
          await this.fetchCategories();
          const categories = this.getExpensesCategories;

          // Pasangkan setiap pendapatan dengan kategori yang sesuai
          expenses.forEach(expenses => {
            const category = categories.find(cat => cat.id === expenses.category_id);
            if (category) {
              expenses.category = category.expenditure_category;
            }
          });
        } catch (error) {
          console.error("Error fetching incomes:", error.response.data.msg);
        }
      },

      // Add Expenses
      async submitExpenses() {
        try {
          // Fetch the total income and expenses
          await this.$store.dispatch('incomes/fetchIncomes');
          await this.$store.dispatch('expenses/fetchExpenses');
          // Calculate total income and expenses
          const totalIncome = this.$store.getters['incomes/getIncomes'].reduce((total, income) => total + income
            .total_income, 0);
          const totalExpenses = this.$store.getters['expenses/getExpenses'].reduce((total, expenses) => total +
            expenses.total_expenditure, 0);
          // Convert the input to a number
          const expenseAmount = parseFloat(this.formkey.total_expenditure);
          // Check if the total expenses plus the new expense amount exceed the total income
          if (totalExpenses + expenseAmount > totalIncome) {
            Swal.fire('Error!', 'Pengeluaran melebihi total pendapatan!', 'error');
            return; // Stop execution
          }
          // If the expenses are within the limit, proceed to create the expense
          await this.$store.dispatch('expenses/createExpenses', this.formkey);
          // Reset the form fields
          this.formkey = {
            total_expenditure: '',
            date_expenditure: '',
            description_expenditure: '',
          };
          // Refresh the list of expenses
          await this.$store.dispatch('expenses/fetchExpenses');
          Swal.fire('Berhasil!', 'Pengeluaran berhasil ditambahkan', 'success');
          // Close the modal
          this.closeModal();
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat menambahkan pengeluaran!'
          });
        }
      },
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      // Akhir Add Expenses

      // Show Detail
      async openShowModalDetails(expenses) {
        try {
          const response = await this.fetchExpensesById(expenses.id); // Ambil detail pengeluaran berdasarkan ID
          this.selectedExpenses = response; // Perbarui selectedExpenses dengan respons dari panggilan API
          this.isModalShowExpensesOpen = true; // Set status modal show expenses menjadi true
        } catch (error) {
          console.error("Error fetching expenses details:", error.response.data.msg);
        }
      },
      closeShowModalExpensesDetail() {
        this.isModalShowExpensesOpen = false; // Set status modal show expenses menjadi false saat menutup modal
      },
      //  /show detail

      // Update
      async submitUpdateExpenses() {
        try {
          const formKey = {
            total_expenditure: this.formkey.total_expenditure,
            date_expenditure: this.formkey.date_expenditure,
            description_expenditure: this.formkey.description_expenditure,
          };
          await this.$store.dispatch('expenses/updateExpenses', {
            id: this.selectedExpensesId,
            formKey
          });
          await this.fetchExpenses(); // Ambil ulang daftar pengeluaran setelah berhasil memperbarui
          this.closeUpdateModal();
          Swal.fire('Sukses!', 'Berhasil memperbarui pengeluaran', 'success');
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat memperbarui pengeluaran!'
          });
        }
      },
      async openUpdateModal(expenses) {
        this.selectedExpensesId = expenses.id;
        try {
          const response = await this.$store.dispatch('expenses/fetchExpensesById', expenses
            .id); // Memuat detail pengeluaran
          this.formkey = {
            total_expenditure: response.total_expenditure,
            date_expenditure: response.date_expenditure,
            description_expenditure: response.description_expenditure
          };
          this.isModalOpenUpdate = true;
        } catch (error) {
          console.error("Error fetching expenses details:", error.response.data.msg);
        }
      },
      closeUpdateModal() {
        this.isModalOpenUpdate = false;
        this.selectedExpensesId = null; // Setelah modal ditutup, reset ID pendapatan yang akan diperbarui
        this.formKey = { // Reset nilai formkey
          total_expenditure: '',
          date_expenditure: '',
          description_expenditure: '',
        };
      },
      // Akhir Update

      // Delete Incomes
      async deleteExpenses(expensesId) {
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
            await this.$store.dispatch('expenses/deleteExpenses', {
              id: expensesId
            });
            Swal.fire(
              'Deleted!',
              'Your income has been deleted.',
              'success'
            );
            // Setelah menghapus, ambil ulang daftar pendapatan
            await this.fetchExpenses();
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
      // /Akhir delete Incomes

      async generateExcel() {
        try {
          // Ambil data pendapatan dari store
          const expenses = this.$store.getters['expenses/getExpenses'];

          // Inisialisasi variabel untuk menyimpan data Excel
          const wb = XLSX.utils.book_new();
          const ws = XLSX.utils.json_to_sheet(expenses);

          // Tambahkan sheet ke workbook
          XLSX.utils.book_append_sheet(wb, ws, 'Expenses');

          // Simpan file Excel
          XLSX.writeFile(wb, 'expenses_data.xlsx');

          // Tampilkan pesan sukses kepada pengguna
          Swal.fire('Success!', 'Income data has been successfully exported to Excel', 'success');
        } catch (error) {
          // Tangani kesalahan jika terjadi
          console.error('Error exporting income data to Excel:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An error occurred while exporting income data to Excel!'
          });
        }
      }


    },
    mounted() {
      this.fetchExpenses();
      this.fetchCategories()
    }
  };
</script>