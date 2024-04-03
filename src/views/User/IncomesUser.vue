<template>
  <div class="flex justify-center">
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
                <p class="text-white text-xl ml-4">Rp. {{ calculateTotalIncome }}</p>
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
                    <button @click="openModal"
                      class="bg-gray-900 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                      type="button">Add Incomes</button>
                    <div v-if="isModalOpen" id="crud-modal" tabindex="-1" aria-hidden="true"
                      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                      <div class="bg-opacity-50 bg-black absolute inset-0" @click="closeModal"></div>
                      <div class="relative p-4 w-full max-w-md">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow">
                          <!-- Modal header -->
                          <div class="flex items-end justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-black dark:text-black">
                              Add Incomes
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
                          <form @submit.prevent="submitIncomes" class="p-4">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                              <div class="col-span-2 relative">
                                <label for="money"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Money</label>
                                <div class="relative">
                                  <span
                                    class="absolute left-0 inset-y-0 flex items-center pl-2 text-gray-500 dark:text-black">
                                    Rp.
                                  </span>
                                  <input type="number" name="total-income-input" id="total_income" value="0" min="0"
                                    v-model="formKey.total_income"
                                    class="pl-10 bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required="">
                                </div>
                              </div>
                              <div class="col-span-2 relative">
                                <label for="money"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Date</label>
                                <div class="relative">
                                  <input type="date" name="date" id="date_of_entry" value="0" min="0"
                                    v-model="formKey.date_of_entry"
                                    class=" bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required="">
                                </div>
                              </div>
                              <div class="col-span-2">
                                <label for="description"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                  Description</label>
                                <textarea id="description_of_entry" rows="4" v-model="formKey.description_of_entry"
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

              <div class="block w-full overflow-x-auto">
                <table class="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Incomes
                      </th>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Date
                      </th>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        DESCRIPTION
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(income, index) in getIncomes" :key="index">
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                        Rp. {{ income.total_income }}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {{ income.date_of_entry }}
                      </td>
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{ income.description_of_entry }}
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
  import Swal from 'sweetalert2';
  import {
    mapActions,
    mapGetters
  } from 'vuex';

  export default {
    data() {
      return {
        formKey: {
          total_income: '',
          date_of_entry: '',
          description_of_entry: '',
        },
        isModalOpen: false,
      };
    },

    computed: {
      ...mapGetters('incomes', ['getIncomes']),
      calculateTotalIncome() {
        return this.getIncomes.reduce((total, income) => total + income.total_income, 0);
      },
    },

    methods: {
      ...mapActions('incomes', ['fetchIncomes', 'createIncomes']),

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
    },
    mounted() {
      this.fetchIncomes(); 
    },
  };
</script>