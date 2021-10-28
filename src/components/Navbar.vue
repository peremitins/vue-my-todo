<template>
	<nav class="sidebar">
		<v-snackbar v-model="snackbar" :timeout="4000" top>
			<span class="mr-3">Awesome!!! You added a new project.</span>
			<v-btn color="grey">Close</v-btn>
		</v-snackbar>

		<v-app-bar app flat>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">My</span>
				<span>ToDo</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>

			<v-menu offset-y origin="center center" transition="scale-transition">
				<template v-slot:activator="{ on, attrs }">
					<v-btn color="primary" dark v-bind="attrs" v-on="on">
						<v-icon left>mdi-chevron-down</v-icon>
						<span>Menu</span>
					</v-btn>
				</template>
				<v-list>
					<v-list-item
						v-for="(link, index) in links"
						:key="index"
						router
						:to="link.route"
					>
						<v-list-item-title>{{ link.text }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

			<v-btn text color="grey">
				<span class="d-none d-sm-flex">SignOut</span>
				<v-icon>mdi-exit-to-app</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer app v-model="drawer">
			<v-layout column align-center>
				<v-flex class="mt-5 d-flex flex-column" align-center>
					<v-avatar size="100" class="d-flex align-center justify-center">
						<img src="avatar-1.jpg" alt="Фото" />
					</v-avatar>
					<p class="gray--text subheading mt-1 text-center">
						PeremitinNS
					</p>
				</v-flex>
				<v-flex>
					<Popup class="mt-4 mb-3" @addedTask="addedTask"></Popup>
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
						<v-icon class="sidebar__icon">mdi-{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="sidebar__link-item">{{
							link.text
						}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>
<script>
import Popup from "./Popup";
export default {
	components: { Popup },
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
			],
			snackbar: false
		};
	},
	methods: {
		addedTask() {
			this.snackbar = true;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/var.scss";

.sidebar .theme--light.v-navigation-drawer {
	backdrop-filter: $backdropFilter;
	background-color: transparent;
	border: 1px solid rgba(209, 213, 219, 0.3);
}
.v-avatar img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.subheading {
	color: $white;
	text-shadow: $textShadowNeon;
	font-size: 30px;
}
.sidebar .sidebar__link-item,
.sidebar .sidebar__icon {
	color: $textGray-1;
	text-shadow: $textShadowInsetHalf;
	font-size: 20px;
}
.sidebar .v-list .v-list-item--active .v-icon .sidebar .sidebar__link-item,
.sidebar .v-list .v-list-item--active .v-list-item__title,
.sidebar .v-list .v-list-item--active {
	color: lighten($textGray-1, 30) !important;
}
@media (max-width: 375px) {
	.v-toolbar__title {
		padding: 0 !important;
	}
}
</style>