import { createContext, useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// 1️⃣ create Context 
const Context = createContext(null);

// 2️⃣ create Context Provider component
export const SidebarProvider = ({ children }) => {
    const [sidebarColor, setSidebarColor] = useState(null);
    const [menuColor, setMenuColor] = useState(null);
    const [navbarColor, setNavbarColor] = useState(null);
    const [sidebarImage, setSidebarImage] = useState(null);
    const [enabled, setEnabled] = useState(false);

    // ✅ Retrieving data from localStorage via `useEffect`
    useEffect(() => {
        const safeParse = (key) => {
            try {
                return JSON.parse(localStorage.getItem(key));
            } catch {
                return localStorage.getItem(key);
            }
        };

        setSidebarColor(safeParse("sidebar_color") || null);
        setMenuColor(safeParse("menu_color") || null);
        setNavbarColor(safeParse("navbar_color") || null);
        setSidebarImage(safeParse("sidebar_image") || null);
        setEnabled(safeParse("darkMode") || false);
    }, []);

    // delete all local storage
    const deleteColor = () => {
        localStorage.removeItem("sidebar_color");
        localStorage.removeItem("menu_color");
        localStorage.removeItem("navbar_color");
        localStorage.removeItem("sidebar_image");
        setSidebarColor(null);
        setMenuColor(null);
        setNavbarColor(null);
        setSidebarImage(null);
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
        <Context.Provider value={{ sidebarColor, menuColor, navbarColor, sidebarImage, deleteColor, enabled, onSwitchHandler, setColorSidebarHandler, setColorMenuHandler, setColorNavbarHandler, setSidebarImageHandler }}>
            {children}
        </Context.Provider>
    );
};

// 3️⃣ create Custom hook 
export const useColor = () => {
    const context = useContext(Context);
    if (context === null || context === undefined) {
        // console.error("❌ Error: useColor used but not wrapped with SidebarProvider!");
        throw new Error("useColor must be used within a SidebarProvider");
    }
    return context;
};
