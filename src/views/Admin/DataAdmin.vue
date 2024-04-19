<template>
  <div class="container">
    <div
      class="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-8 py-6 bg-white border border-gray-400 rounded-xl shadow dark:bg-gray-50 dark:border-gray-700 mt-10 w-auto">
      <h1 class="text-lg font-bold mb-4"><b>Add Account Admin</b></h1>
      <div class="pt-4">
        <form @submit.prevent="submitAdmin">
          <div class="mb-6 pt-2">
            <label for="name" class="block mb-2 text-base font-medium text-gray-500 dark:text-black">Username</label>
            <input type="text" id="username" placeholder="Masukan Username" v-model="formKey.username"
              class="bg-white border-gray-500 text-base sm:text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="email" class="block mb-2 text-base font-medium text-gray-500 dark:text-black">Email</label>
            <input type="text" id="email" placeholder="Masukan Email" v-model="formKey.email"
              class="bg-white border-gray-500 text-base sm:text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="password"
              class="block mb-2 text-base font-medium text-gray-500 dark:text-black">Password</label>
            <input type="password" id="password" placeholder="Masukan Password" v-model="formKey.password"
              class="bg-white border-gray-500 text-base sm:text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
            <label for="confirmpassword" class="block mb-2 text-base font-medium text-gray-500 dark:text-black">Confirm
              Password</label>
            <input type="password" id="confirmpassword" placeholder="Konfirmasi Password" v-model="formKey.confPassword"
              class="bg-white border-gray-500 text-base sm:text-sm focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 rounded-lg mb-4">
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
                Username
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Email
              </p>
            </th>
            <th
              class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p
                class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Status
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
          <tr v-for="(admin, index) in filteredAdmin" :key="index">
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p
                    class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                    {{ admin.username }}</p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {{ admin.email }}</p>
                </div>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex flex-col">
                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                  {{ admin.role }}</p>
              </div>
            </td>
            <td class="p-4 border-b border-blue-gray-50">
              <div class="flex items-center gap-3">
                <button
                  class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
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
                <button @click="deleteAdmin(admin.uuid)"
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
          username: '',
          email: '',
          password: '',
          confPassword: '',
        }
      }
    },

    computed: {
      ...mapGetters('admin', ['getAdmin']),
      filteredAdmin() {
        return this.getAdmin.filter(admin => admin.role === 'admin');
      }
    },

    methods: {
      ...mapActions('admin', ['fetchAdmin', 'createAdmin', 'deleteAdmin']),
      async submitAdmin() {
        try {
          await this.createAdmin(this.formKey);
          this.formKey = {
            username: '',
            email: '',
            password: '',
            confPassword: '',
          };
          Swal.fire('Sukses!', 'Berhasil menambahkan Akun Admin', 'success');
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat menambahkan akun admin'
          });
        }
      },

      async deleteAdmin(adminUuid) {
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
            await this.$store.dispatch('admin/deleteAdmin',
            adminUuid); // Panggil aksi deleteAdmin dengan memberikan userUuid sebagai parameter
            Swal.fire(
              'Deleted!',
              'Your admin account has been deleted.',
              'success'
            );
          }
        } catch (error) {
          console.error("Error deleting admin account:", error.response.data.msg);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Terjadi kesalahan saat menghapus akun admin!'
          });
        }
      }

    },

    mounted() {
      this.fetchAdmin();
    }
  };
</script>