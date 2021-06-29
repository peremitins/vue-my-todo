<template>
  <v-app>
    <Navbar></Navbar>
    <v-main >
      <router-view class="px-3 mb-4"></router-view>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar'
export default {
  components: { Navbar },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  main {
    background-color: #f5f5f5;
  }
</style>