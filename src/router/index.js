import { createRouter, createWebHistory   } from 'vue-router'
import store from "../store/index.js"
const  routes = [
    {
        path:"/",
        name:"Home",
        component: () => import("../views/home.vue"),
        meta: {
            requiresAuth: true
        },
    },
    {
        path:"/example",
        name:"Example",
        component: () => import("../views/example.vue"),
        meta: {
            requiresAuth: true
        },
    },
    {
        path:"/auth",
        name:"Login",
        component: () => import("../views/login.vue"),
        meta: {
            requiresGuest: true
        },
    },
]
const router = createRouter({
    history: createWebHistory  (),
    routes,
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
    const requiresGuest = to.matched.some((x) => x.meta.requiresGuest);
    const isLoggedin = store.getters["_isAuthenticated"];
    if (requiresAuth && !isLoggedin) {
        next({ name: "Login" });
    } else if (requiresGuest && isLoggedin) {
        next("/");
    }  else {
        next();
    }
});
export default  router;