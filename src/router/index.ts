import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import Form from "@/pages/Form.vue";

const routes = [
    {
        path: "/" ,
        redirect: "/Home"
    },
    {
        path: "/Home" ,
        name: "Home" ,
        component: Home
    },
    {
        path: "/Form" ,
        name: "Form" ,
        component: Form

    }
];

const router = createRouter (
    {
        history: createWebHistory() ,
        routes: routes,
        scrollBehavior(to, from, savedPosition) {
            console.log(savedPosition);
             if (to.hash) {
                console.log(2)
                return {
                    el: to.hash,
                    behavior: 'smooth',
                }
            } else {
                return { top: 0 }
            }
        },
    }
);

export default router;