  <template>
    <div class="container max-w-screen-md mx-auto mt-10 p-8 bg-white border border-gray-300 rounded shadow-md">
      <h1 class="font-bold text-2xl mb-3">Manage Your Account</h1>

      <p class="mb-1 text-lg">Username</p>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm">{{  user ? user.username : '' }}</p>
        <a href="#" class="text-sm text-blue-700 hover:underline" @click="openUsernameModal">Edit</a>
      </div>

      <!-- Modal Username -->
      <div v-if="isUsernameModalOpen" id="username-edit-modal" tabindex="-1" aria-hidden="true"
        class="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-black bg-opacity-50">
        <div class="relative p-4 w-full max-w-md">
          <div class="relative bg-white rounded-lg shadow">
            <div class="flex items-center justify-between p-4 border-b">
              <h3 class="text-xl font-semibold text-gray-900">Edit your username</h3>
              <button @click="closeUsernameModal" type="button"
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
              <form class="space-y-4" action="#">
                <div>
                  <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Fullname</label>
                  <input type="text" name="username" id="username" placeholder="Your fullname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required />
                </div>
                <button type="submit"
                  class="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-white w-full">
                  SAVE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Email section -->
      <hr>
      <p class="mb-1 text-lg mt-5">Email</p>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm">{{ user ? user.email : '' }}</p>
        <a href="#" class="text-sm text-blue-700 hover:underline" @click="openEmailModal">Edit</a>
      </div>

      <!-- Modal Email -->
      <div v-if="isEmailModalOpen" id="email-edit-modal" tabindex="-1" aria-hidden="true"
        class="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-black bg-opacity-50">
        <div class="relative p-4 w-full max-w-md">
          <div class="relative bg-white rounded-lg shadow">
            <div class="flex items-center justify-between p-4 border-b">
              <h3 class="text-xl font-semibold text-gray-900">Edit your email</h3>
              <button @click="closeEmailModal" type="button"
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
              <form class="space-y-4" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">New email</label>
                  <input type="email" name="email" id="email" placeholder="Your email address"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                    required />

                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Repeat new email</label>
                  <input type="email" name="email" id="email" placeholder="Repeat your new email address"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                    required />

                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" name="password" id="password" placeholder="Your password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required />
                </div>
                <button type="submit"
                  class="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-white w-full">
                  SAVE
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <!-- Password section -->
      <hr>
      <p class="mb-1 text-lg mt-5">Password</p>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm">********</p>
        <a href="#" class="text-sm text-blue-700 hover:underline" @click="openPasswordModal">Edit</a>

        <!-- Modal Password -->
        <div v-if="isPasswordModalOpen" id="password-edit-modal" tabindex="-1" aria-hidden="true"
          class="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div class="relative p-4 w-full max-w-md">
            <div class="relative bg-white rounded-lg shadow">
              <div class="flex items-center justify-between p-4 border-b">
                <h3 class="text-xl font-semibold text-gray-900">Change your password</h3>
                <button @click="closePasswordModal" type="button"
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
                <form class="space-y-4" action="#">
                  <div>
                    <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900">Current
                      Password</label>
                    <input type="password" name="current-password" id="current-password"
                      placeholder="Your current password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                      required />

                    <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900">New Password</label>
                    <input type="password" name="new-password" id="new-password" placeholder="Your new password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                      required />

                    <label for="repeat-new-password" class="block mb-2 text-sm font-medium text-gray-900">Repeat New
                      Password</label>
                    <input type="password" name="repeat-new-password" id="repeat-new-password"
                      placeholder="Repeat your new password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required />
                  </div>
                  <button type="submit"
                    class="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-white w-full">
                    SAVE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Akhir Modal Password -->
      </div>
      <hr>
      <p class="mb-1 text-lg mt-5">Delete Account</p>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm">be careful. this will delete your user account and all the information you entered. Expenses,
          incomes, all will be deleted</p>
        <a href="#" class="text-sm text-blue-700 hover:underline" @click="openDeleteModal">Delete</a>

        <!-- Modal Delete -->
        <div v-if="isDeleteModalOpen" id="delete-modal" tabindex="-1" aria-hidden="true"
          class="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div class="relative p-4 w-full max-w-md">
            <div class="relative bg-white rounded-lg shadow">
              <div class="flex items-center justify-between p-4 border-b">
                <h3 class="text-xl font-semibold text-gray-900">Delete Account</h3>
                <button @click="closeDeleteModal" type="button"
                  class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 inline-flex justify-center items-center">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div class="p-4 mb-5 text-center">
                <p class="mb-5 text-lg font-normal text-gray-500">Be careful. This will delete your user account and all
                  the information you entered. Expenses, incomes, all will be deleted.</p>
                <button @click="confirmDelete" type="button"
                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5">
                  Yes, I'm sure
                </button>
                <button @click="closeDeleteModal" type="button"
                  class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          user: null,
          isUsernameModalOpen: false,
          isEmailModalOpen: false,
          isPasswordModalOpen: false,
          isDeleteModalOpen: false
        };
      },
      created() {
        this.fetchUserData(); // Panggil method untuk mengambil data pengguna
      },
      methods: {
        async fetchUserData() {
          try {
            // Panggil aksi fetchMe dari store
            const user = await this.$store.dispatch('auth/fetchMe');
            // Update properti user dengan data yang diterima
            if (user) {
              this.user = user;
            }
          } catch (error) {
            console.error('Error fetching user data:', error.message);
          }
        },

        openUsernameModal() {
          this.isUsernameModalOpen = true;
        },
        closeUsernameModal() {
          this.isUsernameModalOpen = false;
        },
        openEmailModal() {
          this.isEmailModalOpen = true;
        },
        closeEmailModal() {
          this.isEmailModalOpen = false;
        },
        openPasswordModal() {
          this.isPasswordModalOpen = true;
        },
        closePasswordModal() {
          this.isPasswordModalOpen = false;
        },
        openDeleteModal() {
          this.isDeleteModalOpen = true;
        },
        closeDeleteModal() {
          this.isDeleteModalOpen = false;
        },
        confirmDelete() {
          this.closeDeleteModal();
        }
      }
    };
  </script>