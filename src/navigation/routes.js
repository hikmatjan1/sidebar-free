import { lazy } from "react";

import Home from "../pages/home/Home";
const About = lazy(() => import("../pages/about/About"));
const Services = lazy(() => import("../pages/services/Services"));
const Settings = lazy(() => import("../pages/settings/Settings"));
const Menu1 = lazy(() => import("../pages/menu/Menu1"));
const Menu2 = lazy(() => import("../pages/menu/Menu2"));
const NotFound = lazy(() => import("./NotFound"));

const routes = [
    { path: '/', name: 'Home', component: Home, role: ["admin"] },
    { path: '/about', name: 'About', component: About, role: ["admin"] },
    { path: '/services', name: 'Services', component: Services, role: ["admin"] },
    { path: '/settings', name: 'Settings', component: Settings, role: ["admin"] },
    { path: '/catalog/menu/submenu1', name: 'Menu1', component: Menu1, role: ["admin"] },
    { path: '/catalog/menu/submenu2', name: 'Menu2', component: Menu2, role: ["admin"] },
    { path: '*', name: 'PageNotFound', component: NotFound, role: ["admin"] },
];

export default routes;