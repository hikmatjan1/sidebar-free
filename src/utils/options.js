import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const sidebarColors = [
    { id: 1, sidebarBgColor: "#012C6E" },
    { id: 2, sidebarBgColor: "#171745" },
    { id: 3, sidebarBgColor: "#1D2733" },
    { id: 4, sidebarBgColor: "#1d2733" },
    { id: 5, sidebarBgColor: "#222326" },
    { id: 6, sidebarBgColor: "#2B2C41" },
    { id: 6, sidebarBgColor: "#006666" },
];

export const menuColors = [
    { id: 1, sidebarItemBgColor: "#002381" },
    { id: 2, sidebarItemBgColor: "#24246b" },
    { id: 3, sidebarItemBgColor: "#2A323E" },
    { id: 4, sidebarItemBgColor: "#1c324d" },
    { id: 5, sidebarItemBgColor: "#2c3140" },
    { id: 6, sidebarItemBgColor: "#41415D" },
    { id: 6, sidebarItemBgColor: "#338585" },
];

export const navbarColors = [
    { id: 1, navbarBgColor: "#012C6E" },
    { id: 2, navbarBgColor: "#171745" },
    { id: 3, navbarBgColor: "#1D2733" },
    { id: 4, navbarBgColor: "#1d2733" },
    { id: 5, navbarBgColor: "#222326" },
    { id: 6, navbarBgColor: "#2B2C41" },
    { id: 7, navbarBgColor: "#fff" },
];

export const sidebarBgImages = [
    { id: 1, sidebarImage: image1 },
    { id: 2, sidebarImage: image2 },
    { id: 3, sidebarImage: image3 },
];