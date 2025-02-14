# sidebar-modern

![Sidebar Preview](https://sidebar-modern-free.netlify.app/)

A customizable and responsive sidebar component for React applications, built with Tailwind CSS and Headless UI.

## Features

✅ Fully responsive sidebar navigation
✅ Dark mode support
✅ Customizable styles via props
✅ Supports sections, nested menus, and icons
✅ Easy integration with Tailwind CSS

## Installation

```sh
npm install sidebar-modern
```

or using yarn:

```sh
yarn add sidebar-modern
```

## Usage

1. We write the routes in advance.

```jsx
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
```

2. Now let's write the sidebar menus

```jsx
import { SlSettings } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { RxExit } from "react-icons/rx";
import home_icon from '/assets/home.svg';
import analitik_icon from '/assets/analitik.svg';
import copy_icon from '/assets/copy.svg';

export const sidebar_sections = [
    { id: 1, name: 'Home', icons: { bgColor: "#2BC840", icon: home_icon }, href: "/", dropdown: false, },
    {
        id: 2, name: 'Pages', icons: { bgColor: "#30bbff", icon: copy_icon }, dropdown: true, menu: [
            { id: 3, name: 'About', href: '/about' },
            { id: 4, name: 'Services', href: '/services' },
        ]
    },
    {
        id: 5, name: 'Catalog', icons: { bgColor: "#FFB620", icon: analitik_icon }, dropdown: true, menu: [
            {
                id: 6, name: 'Menu', dropdown: true, menu: [
                    { id: 7, name: 'Sub Menu 1', href: '/catalog/menu/submenu1' },
                    { id: 8, name: 'Sub Menu 2', href: '/catalog/menu/submenu2' },
                ]
            },
            { id: 9, name: 'Settings', href: '/settings' },
        ],
    },
]

export const profile_menu = [
    { id: 1, name: 'Profile', icon: CgProfile, href: '/profile' },
    { id: 2, name: 'Account Settings', icon: SlSettings, href: '/settings' },
    { id: 3, name: 'Exit', icon: RxExit, href: '/login' },
]
```

Import and use the sidebar in your React project:

```jsx
import Sidebar from "sidebar-modern";

const App = () => {

      // view info handler
  const viewInfoHandler = () => alert("The full documentation is provided at this link.");

  // exit handler
  const onExitHandler = () => alert("Do you really want to leave?");

  // profile dropdown event
  const profileDropdownHandler = (event, value) => {
    event.preventDefault(); // Oldini oladi
    console.log(value);

    if (value?.href === "/login") {
      // The logout code is written here.
    }
  }

  return (
    <Sidebar
        user={{
          name: "Admin" // user name
        }}
        routes={routes} // for routes navigation
        sections={sidebar_sections} // Sidebar menus
        darkMode="#121212" // This works via localStorage, when darkMode is enabled it saves to localStorage, so you can use it from there.
        sidebarOptions={{
          bgColor: "#171745",
          bgImage: "",
          logoInfo: {
            visibleLogo: true,
            image: "",
            width: "38px",
            height: "38px",
            borderRadius: "4px",
            textColor: "#fff",
            chevronLeftColor: "#fff",
            logoName: {
              visible: true,
              name: "Logo name",
              fontSize: "14px",
              info: "Welcome",
            },
          },
          sectionItem: {
            fontSize: "12px",
            bgColor: "#24246b",
            darkMode: "#292727",
            textColor: "#fff",
            activeColor: "#FFB620",
            paddingY: "8px", 
            paddingX: "14px",
            borderRadius: "7px", 
            exit: {
              visible: true, 
              name: "Exit",
              onExitHandler: onExitHandler
            },
          },
          info: {
            visible: true,
            bgColor: "#24246b", 
            content: {
              top: "Need help?", 
              bottom: "Check out our documentation",
              btn: {
                bgColor: "white", 
                textColor: "#012C6E",
                fontSize: "11px", 
                name: "Documentation", 
                viewInfoHandler: viewInfoHandler
              }
            }
          }
        }}
        navbarOptions={{
          visible: true,
          bgColor: "#fff", 
          textColor: "#000", 
          height: "50px", 
          profileDropdownData: profile_menu,
          profileDropdownHandler: profileDropdownHandler
        }}
    />
  );
};

export default App;
```

## Props

| Prop             | Type   | Description                |
| ---------------- | ------ | -------------------------- |
| `user`           | Object | User details               |
| `routes`         | Array  | Navigation routes          |
| `sections`       | Array  | Sidebar sections           |
| `darkMode`       | String | Dark mode background color |
| `sidebarOptions` | Object | Sidebar styling options    |
| `navbarOptions`  | Object | Navbar settings            |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-repo/sidebar-package/issues).

## Author

Developed by **Your Name**. For inquiries, contact [your.email@example.com](mailto:your.email@example.com).

## Keywords

React, Sidebar, Navigation, UI Component, Responsive Sidebar, Dashboard, Tailwind CSS, React Sidebar, Headless UI, Dark Mode.
