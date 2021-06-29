<template>
  <div>
    <h1 class="subheading grey--text">Vue</h1>
    
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4 mx-auto">
              <v-avatar class="d-flex mx-auto" size="100">
                <img :src="person.avatar" class="avatar-img" alt="image">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey">
                <v-icon small left>mdi-message-processing</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'Peremitin',
          role: 'Web developer',
          avatar: '/avatar-1.jpg'
        },
        {
          name: 'Zuckerberg',
          role: 'Web developer',
          avatar: '/avatar-2.jpg'
        },
        {
          name: 'Gates',
          role: 'Social media maverick',
          avatar: '/avatar-3.jpg'
        },
        {
          name: 'Mask',
          role: 'Sales guru',
          avatar: '/avatar-4.jpg'
        },
        {
          name: 'Durov',
          role: 'Web developer',
          avatar: '/avatar-5.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .avatar-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>