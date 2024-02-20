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
        routes: routes
    }
);

export default router;