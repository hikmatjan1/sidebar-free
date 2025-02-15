import { lazy } from "react";

import Home from "../pages/home/Home";
const About = lazy(() => import("../pages/about/About"));
const Services = lazy(() => import("../pages/services/Services"));
const Settings = lazy(() => import("../pages/settings/Settings"));
const Menu1 = lazy(() => import("../pages/menu/Menu1"));
const Menu2 = lazy(() => import("../pages/menu/Menu2"));
const NotFound = lazy(() => import("./NotFound"));

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/services', name: 'Services', component: Services },
    { path: '/settings', name: 'Settings', component: Settings },
    { path: '/catalog/menu/submenu1', name: 'Menu1', component: Menu1 },
    { path: '/catalog/menu/submenu2', name: 'Menu2', component: Menu2 },
    { path: '*', name: 'PageNotFound', component: NotFound },
];

export default routes;