import { createRouter, createWebHistory   } from 'vue-router'
import store from "../store/index.js"
const  routes = [
    {
        path:"/",
        name:"Home",
        component: () => import("../views/user/home.vue"),
        meta: {
            requiresAuth: true
        },
    },
    {
        name:"Catalog",
        path:"/catalog",
        component: () => import("../views/user/catalog.vue"),
        meta: {
            requiresAuth: true
        },
        props:true,
    },
    {
        name:"Favorites",
        path:"/favorites",
        component: () => import("../views/user/favorites.vue"),
        meta: {
            requiresAuth: true
        },
    },
    {
        name:"Brands",
        path:"/brands",
        component: () => import("../views/user/brands.vue"),
        meta: {
            requiresAuth: true
        },
    },
    {
        name:"FAQ",
        path:"/faq",
        component: () => import("../views/user/faq.vue"),
        meta: {
            requiresAuth: true
        },
    },
    {
        name:"EditorSelection",
        path:"/editorSelection",
        component: () => import("../views/user/editorSelection.vue"),
        meta: {
            requiresAuth: true
        },
    },
    {
        name:"Experience",
        path:"/experience/:id",
        component: () => import("../views/user/experience.vue"),
        meta: {
            requiresAuth: true
        },
        props:true,
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