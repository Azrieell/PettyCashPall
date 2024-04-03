<template>
  <section id="home" class="text-gray-600 body-font flex bg-gray-50 bg-svg-constellation-gray-100 relative border-gray-200">
    <div class="container mx-auto flex px-5 py-12 items-center flex-col lg:flex-row text-center">
      <div class="lg:w-2/3 w-full animate-fade-in-down lg:text-left mb-8 lg:mb-0">
        <h1 class="md:text-5xl text-2xl mb-2 font-bold text-gray-800 tracking-tight leading-tight text-center">
          Effortlessly Manage
        </h1>
        <h1 class="md:text-5xl text-2xl mb-1 font-bold text-gray-800 tracking-tight leading-tight text-center">
          Your Petty Cash <span class="border-b-4 border-green-400 -mb-2 md:-mb-20"></span>with
        </h1>
        <h1 class="md:text-5xl text-2xl mb-1 font-bold text-gray-800 tracking-tight leading-tight text-center">
          PettyCashPall<span class="border-b-4 border-green-400 -mb-2 md:-mb-20"></span>
        </h1>
        <h1 class="md:text-5xl text-2xl mb-1 font-bold text-gray-800 tracking-tight leading-tight text-center">
          Track all your cash flow<span class="border-b-4 border-green-400 -mb-2 md:-mb-20"></span>
        </h1>
        <h1 class="md:text-5xl text-2xl mb-1 font-bold text-gray-800 tracking-tight leading-tight text-center">
          in one place.<span class="border-b-4 border-green-400 -mb-2 md:-mb-20"></span>
        </h1>
        <!-- Change the paragraph text -->
        <div class="mt-8 mb-5 md:leading-relaxed leading-normal text-gray-800 tracking-tight text-lg text-center">
          <p>
            Easily record income and expenses without the hassle of bank connections.
            <br>PettyCashPall helps you stay organized and focused on your goals.
          </p>
          <router-link to="/auth/register" class="bg-transparent hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded inline-block mt-4">
            LET'S TRY
          </router-link>
        </div>
      </div>
      <div class="lg:w-1/3 w-full animate-fade-in-down">
        <img src="https://monevium.com/assets/images/app-1-472.webp?v=b15a6e3ab1" class="w-full h-auto" alt="Image">
      </div>
    </div>
  </section>
</template>
