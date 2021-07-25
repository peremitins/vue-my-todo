<template>
	<div>
		<h1 class="subheading dashboard__title">Dashboard</h1>

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
							v-on="on"
						>
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
							v-on="on"
						>
							<v-icon left small>mdi-account-tie</v-icon>
							<span class="caption text--lowercase">By Person</span>
						</v-btn>
					</template>
					<span>Sort project by Person</span>
				</v-tooltip>
			</v-layout>

			<v-card
				flat
				class="card pa-3 mb-4"
				v-for="project in projects"
				:key="project.title"
			>
				<v-layout row wrap :class="`pa-3 project ${project.status}`">
					<v-flex xs12 sm4 md6>
						<div class="caption title font-weight-bold">Project Title</div>
						<v-divider></v-divider>
						<div class="description">{{ project.title }}</div>
					</v-flex>
					<v-flex xs6 sm3 md2>
						<div class="caption title font-weight-bold">Person</div>
						<v-divider></v-divider>
						<div class="description">{{ project.person }}</div>
					</v-flex>
					<v-flex xs6 sm3 md2>
						<div class="caption title font-weight-bold">Due by</div>
						<v-divider></v-divider>
						<div class="description">{{ project.due }}</div>
					</v-flex>
					<v-flex class="chip" xs2 sm2 md2>
						<div>
							<v-chip
								small
								:class="`${project.status} caption my-2 white--text`"
								>{{ project.status }}</v-chip
							>
						</div>
					</v-flex>
				</v-layout>
			</v-card>
		</v-container>
	</div>
</template>
<script>
import db from "@/fb";

export default {
	data() {
		return {
			projects: []
		};
	},
	methods: {
		sortBy(prop) {
			this.projects.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
		}
	},
	created() {
		db.collection("projects").onSnapshot(res => {
			const changes = res.docChanges();

			changes.forEach(change => {
				if (change.type === "added") {
					this.projects.push({
						...change.doc.data(),
						id: change.doc.id
					});
				}
			});
		});
	}
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/var.scss";

.project.complete {
	border-left: 4px solid #3cd1c2;
	border-radius: $borderRadius;
}
.project.ongoing {
	border-left: 4px solid #8e04ff;
	border-radius: $borderRadius;
}
.project.overdue {
	border-left: 4px solid #ff0000;
	border-radius: $borderRadius;
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
.v-card.card {
	backdrop-filter: $backdropFilter;
	background-color: transparent;
	border: 1px solid rgba(209, 213, 219, 0.3);
  box-shadow: $boxShadow!important;
}
.flex.chip {
  display: flex;
  justify-content: center;
}
.title {
  color: $white;
  text-shadow: $textShadow-1;
}
.description {
  color: $white;
  text-shadow: $textShadow-1;
}
.dashboard__title {
  background-clip: text;
  color: transparent;
  background-color: #929292;
  text-shadow: 0px 4px 4px rgb(255 255 255 / 50%);
}
</style>