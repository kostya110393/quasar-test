const prefix = '/account';

const createAccount = () =>
    import(
        /* webpackChunkName: "create-account-page"  */ '../Views/CreateAccount.vue'
    );

const authPage = () =>
    import(
        /* webpackChunkName: "auth-page"  */ '../Views/AuthPage.vue'
    );

const routes = [
    {
        path: prefix,
        alias: `${prefix}/create`,
        name: 'create-account-page',
        component: createAccount,
    },
    {
        path: prefix,
        alias: `${prefix}/auth`,
        name: 'auth-page',
        component: authPage,
    },
];

export default routes;