import Home from "./components/Home";

let NotFound = () =>
    import(/* webpackChunkName: "404" */ "./components/NotFound");

export default {
    mode: "history",

    linkActiveClass: "font-bold",

    routes: [
        {
            path: "*",
            component: NotFound,
        },
        {
            path: "/",
            component: Home,
        },
    ],

    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
};
