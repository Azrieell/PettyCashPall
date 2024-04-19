<template>
  <div class="flex justify-center ml-12">
    <div class="p-8 w-full md:w-auto">
      <div class="container mx-auto">
        <h1 class="text-xl font-bold mb-5 font-montserrat">Incomes</h1>

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
                  Total Incomes</div>
                <p class="text-white text-xl ml-4">Rp. {{ calculateTotalIncome.toLocaleString('id-ID') }}</p>
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
                      type="button">Add Incomes</button>
                    <div v-if="isModalOpen" id="crud-modal" aria-hidden="true"
                      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                      <div class="bg-opacity-50 bg-black absolute inset-0" @click="closeModal"></div>
                      <div class="relative w-full max-w-md px-4 h-full md:h-auto">
                        <!-- Modal content -->
                        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
                          <div class="flex justify-end p-2">
                            <button type="button"
                              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                              @click="closeModal">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                              </svg>
                            </button>
                          </div>
                          <form @submit.prevent="submitIncomes" class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Add Incomes</h3>
                            <div>
                              <label for="price"
                                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Money</label>
                              <div class="relative">
                                <span
                                  class="absolute left-0 inset-y-0 flex items-center pl-2 text-white">Rp.</span>
                                <input type="text" name="total-income-input" id="total_income" value="0"
                                  v-model="formattedTotalIncome" @input="formatCurrency"
                                  class="pl-10 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  required="">
                              </div>
                            </div>
                            <div>
                              <label for="money"
                                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Date</label>
                              <input type="date" name="date" id="date_expenditure" value="0" min="0"
                                v-model="formKey.date_of_entry"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required="">
                            </div>
                            <div>
                              <label for="category"
                                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Choose
                                Category</label>
                              <select id="incomeCategory" v-model="formKey.category"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                <option disabled value="">Pilih kategori</option>
                                <option v-for="category in getIncomesCategories" :key="category.id"
                                  :value="category.income_category">
                                  {{ category.income_category }}
                                </option>
                              </select>
                            </div>
                            <div>
                              <label for="description"
                                class="text-sm font-medium text-black block mb-2 dark:text-gray-300">Description</label>
                              <textarea id="description_of_entry" rows="4" v-model="formKey.description_of_entry"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Description"></textarea>
                            </div>
                            <button type="submit"
                              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="block w-full overflow-x-auto border">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Incomes
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

                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="(income, index) in getIncomes" :key="index">
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        Rp. {{ income.total_income.toLocaleString('id-ID') }}
                      </td>
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{ income.date_of_entry }}
                      </td>
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{ income.category }}
                      </td>
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{ income.description_of_entry }}
                      </td>

                      <!-- Button Edit -->
                      <td>
                        <button @click="openUpdateModal(income)"
                          class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded ml-5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path
                              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                          </svg>
                        </button>
                      </td>
                      <!-- Main modal -->
                      <div v-if="isModalOpenUpdate" id="update-modal" aria-hidden="true"
                        class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                        <div class="bg-opacity-15 bg-black absolute inset-0" @click="closeModal"></div>
                        <div class="relative w-full max-w-md px-4 h-full md:h-auto">
                          <!-- Modal content -->
                          <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
                            <div class="flex justify-end p-2">
                              <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                @click="closeUpdateModal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                                </svg>
                              </button>
                            </div>
                            <form @submit.prevent="submitUpdateIncomes"
                              class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                              <h3 class="text-xl font-medium text-gray-900 dark:text-white">Update Incomes</h3>
                              <div>
                                <label for="price"
                                  class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Money</label>
                                <div class="relative">
                                  <span
                                    class="absolute left-0 inset-y-0 flex items-center pl-2 text-gray-500 dark:text-white">Rp.</span>
                                  <input type="text" name="total-income-input" id="total_income" value="0"
                                    v-model="formattedTotalIncome" @input="formatCurrency"
                                    class="pl-10 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required="">
                                </div>
                              </div>
                              <div>
                                <label for="money"
                                  class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Date</label>
                                <input type="date" name="date" id="date_expenditure" value="0" min="0"
                                  v-model="formKey.date_of_entry"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  required="">
                              </div>
                              <div>
                                <label for="description"
                                  class="text-sm font-medium text-black block mb-2 dark:text-gray-300">Description</label>
                                <textarea id="description_expenditure" rows="4" v-model="formKey.description_of_entry"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  placeholder="Description"></textarea>
                              </div>
                              <button type="submit"
                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <!-- /Button Edit -->

                      <!-- Show -->
                      <td>
                        <button @click="openShowModalDetails(income)"
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded ml-8">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path
                              d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                          </svg>
                        </button>
                      </td>

                      <div v-if="isModalOpenShow" id="update-modal" tabindex="-1" aria-hidden="true"
                        class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                        <div class="bg-opacity-15 bg-black absolute inset-0" @click="closeShowModalDetails"></div>
                        <div class="relative p-4 w-full max-w-md">
                          <!-- Modal content -->
                          <div class="relative bg-white rounded-lg shadow">
                            <!-- Modal header -->
                            <div class="flex items-end justify-between p-4 border-b rounded-t dark:border-gray-600">
                              <h3 class="text-lg font-semibold text-black dark:text-black">
                                Show Detail Incomes
                              </h3>
                              <button @click="closeShowModalDetails"
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
                            <div class="grid gap-4 mb-4 grid-cols-2">
                              <div class="col-span-2 relative">
                                <div class="p-4 overflow-y-auto">
                                  <p>Total Income: Rp. {{ selectedIncome.total_income.toLocaleString('id-ID') }}</p>
                                  <p>Date: {{ selectedIncome.date_of_entry}}</p>
                                  <p>Category: {{ income.category }}</p>
                                  <p>Description: {{ selectedIncome.description_of_entry }}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Show -->

                      <!-- Button Hapus -->
                      <td>
                        <button @click="deleteIncome(income.id)"
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded ml-8">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path
                              d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                          </svg>
                        </button>
                      </td>
                      <!-- /Hapus -->

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
        formKey: {
          total_income: '0',
          date_of_entry: '',
          description_of_entry: '',
          category: '',
        },
        categoryData: {
          income_category: '',
        },
        isModalOpen: false,
        isModalOpenShow: false,
        isModalOpenUpdate: false,
        selectedIncome: {},
        selectedIncomeId: null, // Tambahkan properti baru untuk menyimpan ID pendapatan yang akan diperbarui
      };
    },

    computed: {
      ...mapGetters('incomes', ['getIncomes']),
      ...mapGetters('categories', ['getIncomesCategories']),

      calculateTotalIncome() {
        return this.getIncomes.reduce((total, income) => total + income.total_income, 0);
      },

      formattedTotalIncome: {
        get() {
          // Ketika nilai diambil, kembalikan nilai yang diformat
          return this.formKey.total_income.toLocaleString('id-ID');
        },
        set(value) {
          // Ketika nilai diatur, hapus karakter selain angka dan simpan ke formKey
          this.formKey.total_income = parseFloat(value.replace(/[^\d]/g, ''));
        }
      }

    },

    methods: {
      ...mapActions('incomes', ['fetchIncomes', 'createIncomes', 'fetchIncomeById', 'updateIncomes']),
      ...mapActions('categories', ['fetchCategories']),

      getCategoryName(categoryId) {
        const category = this.getIncomesCategories.find(cat => cat.id === categoryId);
        return category ? category.income_category : '';
      },

      async fetchIncomes() {
        try {
          await this.$store.dispatch('incomes/fetchIncomes');
          const incomes = this.getIncomes;

          // Ambil kategori pendapatan
          await this.fetchCategories();
          const categories = this.getIncomesCategories;

          // Pasangkan setiap pendapatan dengan kategori yang sesuai
          incomes.forEach(income => {
            const category = categories.find(cat => cat.id === income.category_id);
            if (category) {
              income.category = category.income_category;
            }
          });
        } catch (error) {
          console.error("Error fetching incomes:", error.response.data.msg);
        }
      },

      // Tambah Incomes
      async submitIncomes() {
        try {
          await this.createIncomes(this.formKey);
          this.formKey = {
            total_income: '',
            date_of_entry: '',
            description_of_entry: '',
          };
          this.fetchIncomes();
          Swal.fire('Sukses!', 'Berhasil menambahkan pendapatan', 'success');
          this.closeModal();
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat menambahkan pendapatan!'
          });
        }
      },
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      // Akhir Tambah Incomes

      // Show Details
      async openShowModalDetails(income) {
        try {
          const response = await this.fetchIncomeById(income.id);
          this.selectedIncome = response;
          this.isModalOpenShow = true;
        } catch (error) {
          console.error("Error fetching income details:", error.response.data.msg);
        }
      },
      closeShowModalDetails() {
        this.isModalOpenShow = false;
      },
      // Akhir Show Details

      // Update Incomes 
      async submitUpdateIncomes() {
        try {
          const formKey = {
            total_income: this.formKey.total_income,
            date_of_entry: this.formKey.date_of_entry,
            description_of_entry: this.formKey.description_of_entry,
          };
          await this.updateIncomes({
            id: this.selectedIncomeId, // Sertakan ID pendapatan yang akan diperbarui
            formKey
          });
          this.fetchIncomes(); // Ambil ulang daftar pendapatan setelah berhasil memperbarui
          this.closeUpdateModal();
          Swal.fire('Sukses!', 'Berhasil memperbarui pendapatan', 'success');
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat memperbarui pendapatan!'
          });
        }
      },

      async openUpdateModal(income) {
        this.selectedIncomeId = income.id; // Simpan ID pendapatan yang akan diperbarui
        this.fetchIncomeById(income.id) // Memuat detail pendapatan
          .then(response => {
            // Isi nilai formKey dengan data pendapatan yang akan diperbarui
            this.formKey = {
              total_income: response.total_income,
              date_of_entry: response.date_of_entry,
              description_of_entry: response.description_of_entry
            };
            this.isModalOpenUpdate = true; // Tampilkan modal untuk mengedit pendapatan
          })
          .catch(error => {
            console.error("Error fetching income details:", error.response.data.msg);
          });
      },
      closeUpdateModal() {
        this.isModalOpenUpdate = false;
        this.selectedIncomeId = null; // Setelah modal ditutup, reset ID pendapatan yang akan diperbarui
        this.formKey = { // Reset nilai formKey
          total_income: '',
          date_of_entry: '',
          description_of_entry: '',
        };
      },
      // Akhir Update Incomes

      // Delete Incomes
      async deleteIncome(incomeId) {
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
            await this.$store.dispatch('incomes/deleteIncomes', {
              id: incomeId
            });
            Swal.fire(
              'Deleted!',
              'Your income has been deleted.',
              'success'
            );
            // Setelah menghapus, ambil ulang daftar pendapatan
            await this.fetchIncomes();
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
          const incomes = this.$store.getters['incomes/getIncomes'];

          // Menyaring data hanya untuk kolom yang Anda inginkan
          const filteredData = incomes.map(income => ({
            total_income: income.total_income,
            date_of_entry: income.date_of_entry,
            description_of_entry: income.description_of_entry,
            category: income.category,
          }));

          // Inisialisasi variabel untuk menyimpan data Excel
          const wb = XLSX.utils.book_new();
          const ws = XLSX.utils.json_to_sheet(filteredData);

          // Tambahkan sheet ke workbook
          XLSX.utils.book_append_sheet(wb, ws, 'Incomes');

          // Simpan file Excel
          XLSX.writeFile(wb, 'income_data.xlsx');

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
      },

      formatCurrency(event) {
        // Mengambil nilai input
        let value = event.target.value;

        // Menghapus karakter selain angka
        value = value.replace(/[^\d]/g, '');

        // Mengonversi string menjadi angka
        let numberValue = parseFloat(value);

        // Memastikan bahwa numberValue adalah angka yang valid, jika bukan, set ke 0
        if (isNaN(numberValue)) {
          numberValue = 0;
        }

        // Memformat angka dengan titik sebagai pemisah ribuan
        event.target.value = numberValue.toLocaleString('id-ID');
      },

    },
    mounted() {
      this.fetchIncomes();
      this.fetchCategories();
    },
  };
</script>