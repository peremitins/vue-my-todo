<template>
  <v-app>
    <Navbar></Navbar>
    <v-main >
      <router-view class="px-xl-3 px-lg-3 px-md-3 px-sm-3 px-xs-1 mb-4"></router-view>
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