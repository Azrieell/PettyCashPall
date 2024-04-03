<template>
  <div class="flex justify-center">
    <div class="p-8 w-full md:w-auto">
      <div class="container mx-auto">
        <h1 class="text-xl font-bold mb-5 font-montserrat">Dashboard</h1>

        <!-- Card -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <div class="flex justify-center max-w-xs rounded-xl overflow-hidden shadow-xl bg-gray-900">
            <div class="px-6 py-4 flex justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wallet2"
                viewBox="0 0 16 16" style="color: #98DD53;">
                <path
                  d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
              </svg>
              <div>
                <div class="font-bold text-sm text-white mb-1 ml-4" style="font-family: 'Montserrat', sans-serif;">
                  Overall</div>
                <p class="text-white text-xl ml-4">Rp. 100.000</p>
              </div>
            </div>
          </div>
          <!--Total Income -->
          <div class="flex justify-center max-w-xs rounded-xl overflow-hidden shadow-xl bg-gray-200">
            <div class="px-6 py-4 flex justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wallet"
                viewBox="0 0 16 16">
                <path
                  d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
              </svg>
              <div>
                <div class="font-bold text-sm text-black mb-1 ml-4" style="font-family: 'Montserrat', sans-serif;">
                  Income</div>
                <p class="text-black text-xl ml-4">Rp. 1.000.000</p>
              </div>
            </div>
          </div>
          <!-- Total Expenses -->
          <div class="flex justify-center max-w-xs rounded-xl overflow-hidden shadow-xl bg-gray-200">
            <div class="px-6 py-4 flex justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wallet"
                viewBox="0 0 16 16">
                <path
                  d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
              </svg>
              <div>
                <div class="font-bold text-sm text-black mb-1 ml-4" style="font-family: 'Montserrat', sans-serif;">
                  Expenses</div>
                <p class="text-black text-xl ml-4">Rp. 900.000</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Akhir Card -->

        <!-- Awal Grafik -->
        <div class="flex flex-col py-10 text-gray-700 mt-10">
          <div class="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
            <h2 class="text-xl font-bold">One-Year History </h2>
            <span class="text-sm font-semibold text-gray-500">2020</span>
            <div class="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-4">
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$37,500</span>
                <div class="relative flex justify-center w-full h-8 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-16 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">Jan</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$45,000</span>
                <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">Feb</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
                <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">Mar</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$50,000</span>
                <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-6 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">Apr</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
                <div class="relative flex justify-center w-full h-10 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">May</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$55,000</span>
                <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">Jun</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$60,000</span>
                <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-16 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-20 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">Jul</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$57,500</span>
                <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-10 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-24 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">Aug</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$67,500</span>
                <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-10 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-32 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">Sep</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$65,000</span>
                <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-12 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full bg-indigo-400 h-28"></div>
                <span class="absolute bottom-0 text-xs font-bold">Oct</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$70,000</span>
                <div class="relative flex justify-center w-full h-8 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-40 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">Nov</span>
              </div>
              <div class="relative flex flex-col items-center flex-grow pb-5 group">
                <span class="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$75,000</span>
                <div class="relative flex justify-center w-full h-12 bg-indigo-200"></div>
                <div class="relative flex justify-center w-full h-8 bg-indigo-300"></div>
                <div class="relative flex justify-center w-full h-40 bg-indigo-400"></div>
                <span class="absolute bottom-0 text-xs font-bold">Dec</span>
              </div>
            </div>
            <div class="flex mt-3">
              <div class="flex items-center ml-auto">
                <span class="block w-4 h-4 bg-indigo-400"></span>
                <span class="ml-1 text-xs font-medium">Existing</span>
              </div>
              <div class="flex items-center ml-4">
                <span class="block w-4 h-4 bg-indigo-300"></span>
                <span class="ml-1 text-xs font-medium">Upgrades</span>
              </div>
              <div class="flex items-center ml-4">
                <span class="block w-4 h-4 bg-indigo-200"></span>
                <span class="ml-1 text-xs font-medium">New</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Akhir Grafik -->

        <!-- Awal History -->
        <h1 class="text-xl font-bold" style="font-family: 'Montserrat', sans-serif;">Latest Savings</h1>
        <section class="py-2 bg-blueGray-50">
          <div class="xl:w-12/12 mb-12 xl:mb-0 px-4 mt-10">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base text-blueGray-700">Latest</h3>
                  </div>
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <button
                      class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button">See all</button>
                  </div>
                </div>
              </div>

              <div class="block w-full overflow-x-auto">
                <table class="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Name
                      </th>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Description
                      </th>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Amount
                      </th>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Date
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        Salary
                      </th>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        Dari Gaji
                      </td>
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        Rp. 900.000
                      </td>
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        2020-12-12
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
  export default {
    data() {
      return {
        isCollapsed: false
      };
    },
    methods: {
      toggleMenu() {
        this.isCollapsed = !this.isCollapsed;
      }
    }
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Montserrat:wght@300&display=swap');
</style>