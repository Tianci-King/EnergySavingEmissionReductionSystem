import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "@/pages/Home.vue";
import Form from "@/pages/Form.vue";
import Analysis from "@/pages/Analysis.vue";

const routes: RouteRecordRaw[] = [
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

    },
    {
        path: "/analysis" ,
        component:Analysis,
    },
    {
        path: "/:pathMatch(.*)*" ,
        redirect: "/Home"
    }
];

const router = createRouter (
    {
        history: createWebHistory() ,
        routes: routes,
    }
);

export default router;