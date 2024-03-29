import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../views/auth/LoginView.vue"),
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/user",
			name: "user",
			component: () => import("../views/UserView.vue"),
		},
		{
			path: "/anime",
			name: "anime",
			component: () => import("../views/AnimeView.vue"),
		},
	],
})

router.beforeResolve((to, from, next) => {
	// If this isn't an initial page load.
	if (to.name) {
		// Start the route progress bar.
		NProgress.start()
	}
	next()
})

router.afterEach((to, from) => {
	// Complete the animation of the route progress bar.
	NProgress.done()
})

export default router
