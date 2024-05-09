import Home from '../pages/public/Home';
import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';

const privateRoutes = [];

const publicRoutes = [{ path: '/', component: Home, layout: HeaderOnly }];

export { publicRoutes, privateRoutes };
