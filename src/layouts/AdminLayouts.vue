<template>
  <div class="min-h-screen flex">
    <SidebarAdmin />
    <div class="flex-grow p-4">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import SidebarAdmin from "../components/Admin/AdminSidebar.vue";

export default {
  components: {
    SidebarAdmin,
  },
};
</script>

<style>
/* Add this style block to your component's style block */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out; /* Adjust the transition duration and easing function as needed */
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition-delay: 0.3s; /* Adjust the delay duration as needed */
}

/* Additional styling for smoother transition */
.router-view-container {
  position: relative;
  overflow: hidden;
}
</style>
