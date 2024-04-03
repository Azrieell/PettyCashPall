<template>
  <div class="flex flex-wrap place-items-center">
    <section class="relative mx-auto">
      <!-- navbar -->
      <nav class="flex justify-between bg-white border text-black w-screen">
        <div class="px-5 xl:px-12 py-5 flex w-full items-center">
          <a class="text-2xl font-bold font-heading" href="#" style="font-family: 'Montserrat', sans-serif;">
            PettyCashPall
          </a>
          <!-- Nav Links -->
          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a class="hover:text-blue-500 text-black" style="font-family: 'Montserrat', sans-serif;">HOME</a></li>
            <li><a class="hover:text-blue-500 text-black"  style="font-family: 'Montserrat', sans-serif;">ABOUT US</a></li>
            <li><a class="hover:text-blue-500 text-black" href="#" style="font-family: 'Montserrat', sans-serif;">ARTICLE</a></li>
            <li><a class="hover:text-blue-500 text-black" href="#" style="font-family: 'Montserrat', sans-serif;">CONTACT US</a></li>
          </ul>
          <!-- Header Icons -->
          <router-link to="/auth/login">
            <button v-if="isDesktop"
            class="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            SignIn
          </button>
          </router-link>
        </div>
        <!-- Responsive navbar -->
        <button @click="toggleMobileMenu" class="xl:hidden flex mr-5 items-center navbar-burger">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      <!-- Dropdown Menu -->
      <ul v-if="mobileMenuOpen" class="block md:hidden bg-white text-black w-screen py-3">
        <li><a class="block px-4 py-2 hover:text-gray-200" href="#">HOME</a></li>
        <li><a class="block px-4 py-2 hover:text-gray-200" href="#">ABOUT US</a></li>
        <li><a class="block px-4 py-2 hover:text-gray-200" href="#">ARTICLE</a></li>
        <li><a class="block px-4 py-2 hover:text-gray-200" href="#">CONTACT US</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      isDesktop: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  },
  mounted() {
    // Check if the screen width is desktop
    this.isDesktop = window.innerWidth > 1024; // Adjust the width according to your design
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth > 1024; // Adjust the width according to your design
    });
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@1,300&family=Montserrat:wght@300&display=swap');
</style>
