<template>
  <div>
    <h1 class="subheading team__title">Team</h1>
    
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="card-person text-xs-center ma-3 pa-5">
            <v-responsive class="pt-4 mx-auto">
              <v-avatar class="d-flex mx-auto" size="100">
                <img :src="person.avatar" class="avatar-img" alt="image">
              </v-avatar>
            </v-responsive>
            <v-card-text class="text-center">
              <div class="subheading team__item-title">{{ person.name }}</div>
              <div class="team__description">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn class="mx-auto">
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
          name: 'Mask',
          role: 'Sales guru',
          avatar: '/avatar-4.jpg'
        },
        {
          name: 'Durov',
          role: 'Web developer',
          avatar: '/avatar-5.jpg'
        },
        {
          name: 'Zuckerberg',
          role: 'Social media maverick',
          avatar: '/avatar-2.jpg'
        },
        {
          name: 'Gates',
          role: 'Web developer',
          avatar: '/avatar-3.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/var.scss';

  .v-sheet.v-card.card-person {
    position: relative;
    background-color: transparent;
    border-radius: $borderRadius;
    overflow: hidden;
    box-shadow: $boxShadow;
  }
  .v-card.card-person .v-card__text,
  .v-card.card-person .v-responsive
  .v-card.card-person .v-card__actions {
    position: relative;
  }
  .v-card.card-person::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: $backdropFilter;
    background-color: transparent;
    border: 1px solid rgba(209, 213, 219, 0.3);
    z-index: 0;
  }
  .avatar-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .v-card.card-person .team__item-title {
    color: $white;
    text-shadow: $textShadowNeon;
  }
  .v-card.card-person .team__description {
    color: $white;
    text-shadow: $textShadow-1;
  }
  .team__title {
    background-clip: text;
    color: transparent;
    background-color: #929292;
    text-shadow: 0px 4px 4px rgb(255 255 255 / 50%);
  }
</style>