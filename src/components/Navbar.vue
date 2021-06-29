<template>
	<nav>
		<v-app-bar app flat>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">ToDo</span>
				<span>My</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>

			<v-menu 
        offset-y
        origin="center center"
        transition="scale-transition"
      >
				<template v-slot:activator="{ on, attrs }">
					<v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
					</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
						<v-list-item-title>{{ link.text }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

			<v-btn text color="grey">
				<span>SignOut</span>
				<v-icon>mdi-exit-to-app</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer app v-model="drawer" class="primary">
			<v-layout column align-center>
				<v-flex class="mt-5">
					<v-avatar size="100">
						<img src="/avatar-1.jpg" alt="" />
					</v-avatar>
					<p class="white--text subheading mt-1 text-center">
						PeremitinNS
					</p>
				</v-flex>
			</v-layout>
			<v-list>
				<v-list-item
					v-for="link in links"
					:key="link.text"
					router
					:to="link.route"
				>
					<v-list-item-action>
						<v-icon class="white--text">mdi-{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="white--text">{{
							link.text
						}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>
<script>
export default {
	data() {
		return {
			drawer: false,
			links: [
				{
					icon: "view-dashboard",
					text: "Dashboard",
					route: "/"
				},
				{
					icon: "folder",
					text: "My Projects",
					route: "/projects"
				},
				{
					icon: "account-switch",
					text: "Team",
					route: "/team"
				}
			]
		};
	}
};
</script>

<style lang="scss">
.v-avatar img {
	width: 100%;
	height: 1000%;
	object-fit: cover;
}
</style>