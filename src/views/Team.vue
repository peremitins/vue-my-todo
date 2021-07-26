<template>
  <div>
    <h1 class="container subheading team__title">Team</h1>
    
    <v-container class="mb-5">
      <v-layout row wrap>
        <v-flex class="card-person-wrapper"  sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="card-person text-xs-center ma-3 pa-xl-5 pa-lg-3 pa-md-3 pa-sm-3 pa-xs-5">
            <v-responsive class="card-person-photo pt-4 mx-auto">
              <v-avatar class="d-flex mx-auto mb-1 team__photo" size="110">
                <img :src="person.avatar" class="avatar-img" alt="image">
              </v-avatar>
            </v-responsive>
            <v-card-text class="text-center">
              <div class="subheading team__item-title">{{ person.name }}</div>
              <div class="team__description">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class="card-person-btn">
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
          avatar: 'avatar-1.png'
        },
        {
          name: 'Mask',
          role: 'Sales guru',
          avatar: 'avatar-4.png'
        },
        {
          name: 'Durov',
          role: 'Web developer',
          avatar: 'avatar-5.png'
        },
        {
          name: 'Zuckerberg',
          role: 'Social media maverick',
          avatar: 'avatar-2.png'
        },
        {
          name: 'Gates',
          role: 'Web developer',
          avatar: 'avatar-3.png'
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
.v-card.card-person .v-card__text {
  padding: 10px 10px 10px;
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
  transition: all .3s ease;
  position: absolute;
  will-change: auto;
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
.v-avatar.team__photo {
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 5px solid $gray;
    border-radius: 50%;
    z-index: 1;
  }
}
.card-person-wrapper {
  &:nth-child(1) {
    .v-avatar.team__photo img {
      transform: translateY(10px);
    }
    &:hover {
      .v-avatar.team__photo img {
        transform: translateY(5px) scale(1.1);
      }
    }
  }
  &:nth-child(2) {
    .v-avatar.team__photo img {
      transform: translateY(10px);
    }
    &:hover {
      .v-avatar.team__photo img {
        transform: translateY(0px) scale(1.1);
      }
    }
  }
  &:nth-child(3) {
    .v-avatar.team__photo img {
      transform: translateY(18px);
    }
    &:hover {
      .v-avatar.team__photo img {
        transform: translateY(8px) scale(1.1);
      }
    }
  }
  &:nth-child(4) {
    .v-avatar.team__photo img {
      transform: translateY(12px);
    }
    &:hover {
      .v-avatar.team__photo img {
        transform: translateY(5px) scale(1.1);
      }
    }
  }
  &:nth-child(5) {
    .v-avatar.team__photo img {
      transform: translateY(10px);
    }
    &:hover {
      .v-avatar.team__photo img {
        transform: translateY(0px) scale(1.1);
      }
    }
  }
}
.card-person {
  display: flex;
  flex-direction: column;
  height: 270px;
}
.card-person-btn {
  margin-top: auto;
}
.card-person-photo {
  max-height: 130px;
}
@media (max-width: 500px) {
  .flex.card-person-wrapper {
    flex: 1 1 30%!important;
  }
  .card-person {
    padding: 10px 0!important;
  }
}
@media (max-width: 375px) {
  .flex.card-person-wrapper {
    flex: 1 1 100%!important;
  }
}

</style>