import homeRoutes from '../components/TheHome/UI/Routes/home.routes.js';
import accountRoutes from '../components/TheAccount/UI/Routes/account.routes.js';

/** @type import('vue-router').RouteRecordRaw[] */
const routes = [
    ...homeRoutes,
    ...accountRoutes
];

export default routes;