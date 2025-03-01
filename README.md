# react-infinity-sidebar

# Example

Click here to view. [Sidebar Preview](https://sidebar-modern-free.netlify.app/)

A fully customizable and responsive sidebar component for React applications, built with TailwindCSS and Headless UI. Easily integrate dynamic navigation menus, dark mode, and various styling options. Designed for dashboards, admin panels, and modern web applications, this component provides a smooth user experience with minimal setup. Supports multiple layouts, collapsible sections, and seamless animations. Works out-of-the-box with TailwindCSS configurations and allows deep customization to match your project’s branding. Enhance your React app’s navigation experience with a professional sidebar solution.

| Image 1                                         | Image 2                                         | Image 3                                         | Image 4                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| ![Image 1](https://i.postimg.cc/qB2TZQ6v/1.jpg) | ![Image 2](https://i.postimg.cc/13FWH7j9/2.jpg) | ![Image 3](https://i.postimg.cc/qRWwy8xt/3.jpg) | ![Image 4](https://i.postimg.cc/9fmBBmV3/5.jpg) |


## Features

✅ Fully responsive sidebar navigation,  <br>
✅ Fully customizable – Easily adjust width, height, and animations. <br>
✅ Smooth animations – Beautiful transitions when opening and closing. <br>
✅ Responsive design – Works perfectly on all devices (mobile & desktop). <br>
✅ Dark & Light mode support – Adapts to different themes effortlessly. <br>
✅ Two modes – Static or Collapsible (toggle) mode for better UX. <br>
✅ Seamless TailwindCSS integration – Customize styles easily. <br>
✅ Navigation-ready – Perfect for adding menus and action buttons. <br>
✅ Highly Customizable – Easily modify width, height, colors, and animations. <br>
✅ The navbar section is also included. <br>
✅ Collapsible Mode – Sidebar toggles on/off with a button. <br>
✅ Static Mode – Always visible, ideal for dashboards. <br>
✅ Customizable styles via props <br>
✅ Supports sections, nested menus, and icons <br>
✅ Easy integration with Tailwind CSS <br>
✅ Routes are also built in, you don't have to do it yourself. <br>

🛠 Technologies Used:
⚡ React.js – For an interactive and dynamic UI. <br>
🎨 TailwindCSS or Custom CSS – For modern and efficient styling. <br>


## Installation

```sh
npm install react-infinity-sidebar
```

or using yarn:

```sh
yarn add react-infinity-sidebar
```

## Note
1. [Important]: Installing react-router-dom is mandatory; you only provide the routes, and it handles everything else automatically.
2. [Important]: The Sidebar component must be wrapped with a SidebarProvider component, otherwise it will not work.
3. Installing Suspense is optional, if you install it, you can get the Loader from react-infinity-sidebar, it's ready-made.
4. You can also use the 404 page from react-infinity-sidebar, it's ready-made.

## Usage

1. SidebarProvider needs to be wrapped generically as a Provider (important)

```jsx
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Installation is mandatory.
import { SidebarProvider, Loader } from 'react-infinity-sidebar';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)

```

2. We write the routes in advance. Open a separate file and put this in it. We will write all the routes in this file. 🔴 **Note:** Note: Each of the pages here must be created first.

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

4. Import and use the sidebar in your React project: 🔴 **Note:** Note: You need to install the react-router-dom package first.

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
🚀 Easy to set up <br> 
🎨 Highly customizable <br>
📱 Works on all devices <br>
🛠 Minimal setup required <br>


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

## 📌 Changelog

### 🏷 v1.0.0 - 2025-02-13
- 🎉 **Initial version!** The Sidebar component has been created.

### 🆕 (v1.0.1 - v1.0.9) - 2025-02-17
- 🛠 **Bug** – There were some errors between these versions, and corrections are being made.

### 🆕 (v1.0.10) - 2025-02-18
- 🛠 **Bug Fix** – The errors have been completely eliminated.
- 🔹 **Theme Config** – Added the ability to choose colors for the `sidebar`, `menu`, and `navbar`.
- 🔹 **Dark Mode Support** – Sidebar is now compatible with `dark mode`.
- 🔹 **Routes** – Fully inclusive of directions `Routes, Route`.
  
### 🆕 (v1.0.11) - 2025-02-19
- 🔹 **Add Font** – Verdana, Geneva, Tahoma, sans-serif fonts have been added.

### 🆕 (v1.0.12) - 2025-02-19
- 🛠 **Bug Fix** – Fixed bugs in saving to Store.

### 🆕 (v1.0.13) - 2025-02-19
- 🛠 **Bug** – There is an error in Voice Control.
  
### 🆕 (v1.0.14) - 2025-03-01
- 🛠 **Bug Fix** – Voice control bug fixed.
- 
### 🆕 (v1.0.15) - 2025-03-01
- 🛠 **Bug Fix** – Text related to voice control has been removed from the right panel.


## 💡 Feedback
Your feedback is important to us! If you find a bug or have something new to add, please let us know:

- Leave a new message in the **Issues** section.

👉 [GitHub Issues](https://github.com/hikmatjan1/sidebar-free/issues)  


## License

React Select Custom Component is open-source and available under the MIT License.


## Author

Developed by **Khikmat Turaev**. For inquiries, contact [thravshanovich@gmail.com](mailto:thravshanovich@gmail.com).
