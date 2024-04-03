<template>
  <div>
    <SidebarUser />
    <router-view />
  </div>
</template>
<script>
  import SidebarUser from '../components/User/SidebarUser.vue';
  export default {
    components: {
      SidebarUser
    },
  };
</script>