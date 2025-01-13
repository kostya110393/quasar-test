const prefix = '/home';

const homePage = () =>
    import(
        /* webpackChunkName: "home-page"  */ '../Views/HomePage.vue'
    );

const routes = [
    {
        path: prefix,
        alias: `${prefix}`,
        name: 'home-page',
        component: homePage,
    },
];

export default routes;