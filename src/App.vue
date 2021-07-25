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
  background: linear-gradient(150deg,	rgba(2, 0, 36, 0) 7%,	rgba(0, 0, 0, 0.8) 100%);
}
</style>