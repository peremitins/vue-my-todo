<template>
	<div>
		<h1 class="subheading grey--text">Projects</h1>

		<v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel class="my-1" v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
          person: 'Peremitin',
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
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Peremitin"
      })
    }
  }
};
</script>
<style lang="">
</style>