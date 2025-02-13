import { createContext, useContext, useState } from "react";

// 1️⃣ create Context 
const Context = createContext({
    color: localStorage.getItem("drawer_selected_colors") ? JSON.parse(localStorage.getItem("drawer_selected_colors")) : null,
    updateColor: () => { },
    deleteColor: () => { },
    enabled: localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false,
    onSwitchHandler: () => { },

    sidebarColor: localStorage.getItem("sidebar_color") ? JSON.parse(localStorage.getItem("sidebar_color")) : null,
    setColorSidebarHandler: () => { },
    menuColor: localStorage.getItem("menu_color") ? JSON.parse(localStorage.getItem("menu_color")) : null,
    setColorMenuHandler: () => { },
    navbarColor: localStorage.getItem("navbar_color") ? JSON.parse(localStorage.getItem("navbar_color")) : null,
    setColorNavbarHandler: () => { },
    sidebarImage: localStorage.getItem("sidebar_image") ? JSON.parse(localStorage.getItem("sidebar_image")) : null,
    setSidebarImageHandler: () => { }
});

// 2️⃣ create Context Provider component
export const ValueProvider = ({ children }) => {
    const [color, setColor] = useState(localStorage.getItem("drawer_selected_colors") ? JSON.parse(localStorage.getItem("drawer_selected_colors")) : null);
    const [sidebarColor, setSidebarColor] = useState(localStorage.getItem("sidebar_color") ? JSON.parse(localStorage.getItem("sidebar_color")) : null);
    const [menuColor, setMenuColor] = useState(localStorage.getItem("menu_color") ? JSON.parse(localStorage.getItem("menu_color")) : null);
    const [navbarColor, setNavbarColor] = useState(localStorage.getItem("navbar_color") ? JSON.parse(localStorage.getItem("navbar_color")) : null);
    const [sidebarImage, setSidebarImage] = useState(localStorage.getItem("sidebar_image") ? JSON.parse(localStorage.getItem("sidebar_image")) : null);
    const [enabled, setEnabled] = useState(localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode")) : false);

    // update
    const updateColor = (newValue) => {
        localStorage.setItem("drawer_selected_colors", newValue);
        setColor(JSON.parse(newValue));
    };

    // delete
    const deleteColor = (newValue) => {
        localStorage.removeItem("sidebar_color");
        localStorage.removeItem("menu_color");
        localStorage.removeItem("navbar_color");
        localStorage.removeItem("sidebar_image");
        setSidebarColor(newValue);
        setMenuColor(newValue);
        setNavbarColor(newValue);
        setSidebarImage(newValue);
    };

    // switch on/off
    const onSwitchHandler = newValue => {
        localStorage.setItem("darkMode", newValue);
        setEnabled(newValue);
    }

    // set color sidebar
    const setColorSidebarHandler = (newValue) => {
        localStorage.setItem("sidebar_color", newValue);
        setSidebarColor(JSON.parse(newValue));
    };
    // set color menu
    const setColorMenuHandler = (newValue) => {
        localStorage.setItem("menu_color", newValue);
        setMenuColor(JSON.parse(newValue));
    };
    // set color navbar
    const setColorNavbarHandler = (newValue) => {
        localStorage.setItem("navbar_color", newValue);
        setNavbarColor(JSON.parse(newValue));
    };
    // set sidebar image
    const setSidebarImageHandler = (newValue) => {
        localStorage.setItem("sidebar_image", newValue);
        setSidebarImage(JSON.parse(newValue));
    };

    return (
        <Context.Provider value={{ color, sidebarColor, menuColor, navbarColor, sidebarImage, updateColor, deleteColor, enabled, onSwitchHandler, setColorSidebarHandler, setColorMenuHandler, setColorNavbarHandler, setSidebarImageHandler }}>
            {children}
        </Context.Provider>
    );
};

// 3️⃣ create Custom hook 
export const useColor = () => {
    const context = useContext(Context);
    if (!context) throw new Error("useCounter must be used within a CounterProvider");
    return context;
};
