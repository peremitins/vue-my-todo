<template>
	<div class="projects">
		<h1 class="container subheading projects__title">Projects</h1>

		<v-container class="mb-5">
      <v-expansion-panels dark>
        <v-expansion-panel class="my-2 item-wrapper" v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header class="font-weight-normal">
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="subtitle font-weight-bold">due by {{ project.due }}</div>
                <div class="text">{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
		</v-container>
	</div>
</template>
<script>
import db from '@/fb'

export default {
  data() {
    return {
       projects: []
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Peremitin"
      })
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles/var.scss";

.projects .theme--dark.v-expansion-panels .v-expansion-panel {
  border-radius: $borderRadius;
  overflow: hidden;
  box-shadow: $boxShadow;
  backdrop-filter: $backdropFilter;
  background-color: transparent;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
.projects .v-expansion-panel-header {
  text-shadow: $textShadow-2;
  color: $white;
}
.projects .v-sheet.v-card {
  box-shadow: inset 0.2rem 0.2rem 0.5rem #858585, inset -0.2rem -0.2rem 0.5rem #b5b5b5;
  backdrop-filter: $backdropFilter;
  background-color: transparent;
}
.v-application .subtitle {
  color: $white;
  text-shadow: $textShadow-1;
}
.v-application .text {
  color: $white;
  text-shadow: $textShadow-1;
} 
.projects__title {
  background-clip: text;
  color: transparent;
  background-color: #929292;
  text-shadow: 0px 4px 4px rgb(255 255 255 / 50%);
}
@media (max-width: 375px) {
  .v-expansion-panel-header {
    padding: 10px;
  }
}
</style>