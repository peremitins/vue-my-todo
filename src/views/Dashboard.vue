<template>
  <div>
    <h1 class="subheading grey--text">Dash</h1>
    
    <v-container class="my-5">
      
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
              small 
              flat 
              color="grey lighten-4 mx-3" 
              @click="sortBy('title')" 
              v-bind="attrs"
              v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text--lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
              small 
              flat 
              color="grey lighten-4" 
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on">
              <v-icon left small>mdi-account-tie</v-icon>
              <span class="caption text--lowercase">By Person</span>
            </v-btn>
        </template>
          <span>Sort project by Person</span>
        </v-tooltip>
      </v-layout>
      
      <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
                <v-chip small :class="`${project.status} caption my-2 white--text`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Design a new website',
          person: 'Peremitin',
          due: '1st Jun 2021',
          status: 'ongoing',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, autem consequuntur! Ipsa nam maiores inventore. Numquam repellat debitis at atque.'
        },
        {
          title: 'Code up the home page',
          person: 'Zuckerberg',
          due: '1st Jan 2021',
          status: 'complete',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, autem consequuntur! Ipsa nam maiores inventore. Numquam repellat debitis at atque.'
        },
        {
          title: 'Design video',
          person: 'Gates',
          due: '16st Jun 2021',
          status: 'complete',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, autem consequuntur! Ipsa nam maiores inventore. Numquam repellat debitis at atque.'
        },
        {
          title: 'Create a form',
          person: 'Durov',
          due: '11st Nov 2020',
          status: 'overdue',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, autem consequuntur! Ipsa nam maiores inventore. Numquam repellat debitis at atque.'
        }
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] > b[prop] ? 1 : -1)
    }
  }
}
</script>
<style lang="scss">
  .project.complete {
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing {
    border-left: 4px solid #8e04ff;
  }
  .project.overdue {
    border-left: 4px solid #ff0000;
  }
  .theme--light.v-chip:not(.v-chip--active).complete {
    background: #3cd1c2;
  }
  .theme--light.v-chip:not(.v-chip--active).ongoing {
    background: #8e04ff;
  }
  .theme--light.v-chip:not(.v-chip--active).overdue {
    background: #ff0000;
  }
</style>