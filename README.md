# react-infinity-sidebar

# Example

Click here to view. [Sidebar Preview](https://sidebar-modern-free.netlify.app/)

A fully customizable and responsive sidebar component for React applications, built with TailwindCSS and Headless UI. Easily integrate dynamic navigation menus, dark mode, and various styling options. Designed for dashboards, admin panels, and modern web applications, this component provides a smooth user experience with minimal setup. Supports multiple layouts, collapsible sections, and seamless animations. Works out-of-the-box with TailwindCSS configurations and allows deep customization to match your project’s branding. Enhance your React app’s navigation experience with a professional sidebar solution.


## Features

1.  ✅ Fully responsive sidebar navigation, 
2.  ✅ Fully customizable – Easily adjust width, height, and animations.
3.  ✅ Smooth animations – Beautiful transitions when opening and closing.
4.  ✅ Responsive design – Works perfectly on all devices (mobile & desktop).
5.  ✅ Dark & Light mode support – Adapts to different themes effortlessly.
6.  ✅ Two modes – Static or Collapsible (toggle) mode for better UX.
7.  ✅ Seamless TailwindCSS integration – Customize styles easily.
8.  ✅ Navigation-ready – Perfect for adding menus and action buttons.
9.  ✅ Highly Customizable – Easily modify width, height, colors, and animations.
10. ✅ The navbar section is also included.
11. ✅ Collapsible Mode – Sidebar toggles on/off with a button.
12. ✅ Static Mode – Always visible, ideal for dashboards.
13. ✅ Customizable styles via props
14. ✅ Supports sections, nested menus, and icons
15. ✅ Easy integration with Tailwind CSS
16. ✅ Routes are also built in, you don't have to do it yourself.

🛠 Technologies Used:
1. ⚡ React.js – For an interactive and dynamic UI.
1. 🎨 TailwindCSS or Custom CSS – For modern and efficient styling.


## Installation

```sh
npm install react-infinity-sidebar
```

or using yarn:

```sh
yarn add react-infinity-sidebar
```


## Usage

1. SidebarProvider needs to be wrapped generically as a Provider (important)

```jsx
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SidebarProvider, Loader } from 'react-infinity-sidebar';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>,
)

```

1. We write the routes in advance. Open a separate file and put this in it. We will write all the routes in this file.
🔴 **Note:** Note: Each of the pages here must be created first.

```jsx
import { lazy } from "react";
import Sidebar, { NotFound } from "react-infinity-sidebar";

import Home from "../pages/home/Home";
const About = lazy(() => import("../pages/about/About"));
const Services = lazy(() => import("../pages/services/Services"));
const Settings = lazy(() => import("../pages/settings/Settings"));
const Menu1 = lazy(() => import("../pages/menu/Menu1"));
const Menu2 = lazy(() => import("../pages/menu/Menu2"));

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

3. Now let's write the sidebar menus. dropdown: when true, indicates that there is another menu inside. Open a separate file and put this in it. We will write all the routes in this file.

```jsx

export const sidebar_sections = [
    { id: 1, name: 'Home', icons: { bgColor: "#2BC840", icon: "https://i.postimg.cc/90NNkmFt/default.png" }, href: "/", dropdown: false, },
    {
        id: 2, name: 'Pages', icons: { bgColor: "#30bbff", icon: "https://i.postimg.cc/FK7bPykq/copy.png" }, dropdown: true, menu: [
            { id: 3, name: 'About', href: '/about' },
            { id: 4, name: 'Services', href: '/services' },
        ]
    },
    {
        id: 5, name: 'Catalog', icons: { bgColor: "#FFB620", icon: "https://i.postimg.cc/zXKc7rYW/Vector.png" }, dropdown: true, menu: [
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
    { id: 1, name: 'Profile', icon: "https://i.postimg.cc/kXhh7vPJ/people.png", href: '/profile' },
    { id: 2, name: 'Account Settings', icon: "https://i.postimg.cc/8cNxrpZT/settings.png", href: '/settings' },
    { id: 3, name: 'Exit', icon: "https://i.postimg.cc/vBLNMRbk/logout-1.png", href: '/login' },
]
```

4. Import and use the sidebar in your React project:
🔴 **Note:** Note: You need to install the react-router-dom package first.

```jsx
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar, { Loader } from "react-infinity-sidebar";
import routes from 'the path of this component';
import { sidebar_sections } from 'the path of this component';
import { profile_menu } from 'the path of this component';

import "react-infinity-sidebar/dist/sidebar.css"; // import CSS file (important)

let sidebarOptions = {
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
}

let navbarOptions = {
  visible: true, 
  bgColor: "#fff", 
  textColor: "#000", 
  height: "50px", 
  profileDropdownData: profile_menu,
  profileDropdownHandler: profileDropdownHandler
}

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
    <div className='max-w-[2200px] m-auto'>
      <Sidebar
        user={{
          name: "Admin", // user name
          image: "", // default
        }}
        routes={routes} // routes navigation
        sections={sidebar_sections} // sidebar section
        darkMode="#121212" // working with localstorage, name is darkMode (boolean type)
        sidebarOptions={sidebarOptions}
        navbarOptions={navbarOptions}
      />
    </div>
  );
};

export default App;
```

## Props

| Prop             | Type   | Description                | Default         |
| ---------------- | ------ | -------------------------- | --------------- |
| `user`           | Object | User details               | {name: "Admin"} |
| `routes`         | Array  | Navigation routes          |
| `sections`       | Array  | Sidebar sections           |
| `darkMode`       | String | Dark mode background color | #121212         |
| `sidebarOptions` | Object | Sidebar styling options    |
| `navbarOptions`  | Object | Navbar settings            |

## Why Use `react-infinity-sidebar`?
1. 🚀 Easy to set up
2. 🎨 Highly customizable
3. 📱 Works on all devices
4. 🛠 Minimal setup required


## Author

Developed by **Khikmat Turaev**. For inquiries, contact [thravshanovich@gmail.com](mailto:thravshanovich@gmail.com).


## Keywords

react, sidebar, react-infinity-sidebar, navigation, ui-component, menu, responsive, dashboard, tailwindcss, react-sidebar, sidebar-component, sidebar-pro, sidebar-modern, sidebar-pro-component, sidebar-navigation, collapsible-sidebar, dropwdown-menu, sidebar-menu, sidebar-multi-menu, dynamic-sidebar, animated-sidebar, react-sidebar-component, sidebar-layout, admin-sidebar, custom-sidebar, dark-mode-sidebar, tailwind-sidebar, multi-level-sidebar, mobile-friendly-sidebar, sidebar-ui, sidebar-panel, modern-sidebar, sidebar-toggle, sidebar-with-navbar, react-navigation-sidebar", "LuxeSidebar", "react-pro-sidebar", "ProSidebarX", "PrimeSidebar", "InfinitySidebar", "UltraSidebar", "FlexiSidebar", "SideMaster", "EasySidebar", "ReactSidePro", "SmoothSidebar", "MegaSidebar"


## Development

To contribute or make changes, clone the repository and install dependencies:

```bash
git clone https://github.com/hikmatjan1/sidebar-free.git
cd sidebar-free
npm install
```

Run the development server:

```bash
npm run dev
```

## License

React Select Custom Component is open-source and available under the MIT License.