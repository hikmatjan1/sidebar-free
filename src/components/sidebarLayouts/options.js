import { MdSettings } from 'react-icons/md';
import { CgProfile } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";
import home_icon from '../../assets/home.svg';
import analitik_icon from '../../assets/analitik.svg';
import copy_icon from '../../assets/copy.svg';

export const sidebar_sections = [
    { id: 1, name: 'Home', icons: { bgColor: "#3005D0", icon: home_icon }, href: "/", dropdown: false, role: ["admin"] },
    {
        id: 2, name: 'Pages', icons: { bgColor: "#30bbff", icon: copy_icon }, dropdown: true, role: ["admin"], menu: [
            { id: 3, name: 'About', href: '/about', role: ["admin"] },
            { id: 4, name: 'services', href: '/services', role: ["admin"] },
        ]
    },
    {
        id: 5, name: 'Catalog', icons: { bgColor: "#FFB620", icon: analitik_icon }, dropdown: true, role: ["admin"], menu: [
            {
                id: 6, name: 'Menu', dropdown: true, role: ["admin"], menu: [
                    { id: 7, name: 'Sub Menu 1', href: '/catalog/menu/submenu1', dropdown: false, role: ["admin"] },
                    { id: 8, name: 'Sub Menu 2', href: '/catalog/menu/submenu2', dropdown: false, role: ["admin"] },
                ]
            },
            { id: 9, name: 'Settings', href: '/settings', role: ["admin"] },
        ],
    },
]

export const profile_menu = [
    { id: 1, name: 'Your profile', icon: CgProfile, href: '/profile' },
    { id: 2, name: 'Settings', icon: MdSettings, href: '/settings' },
    { id: 3, name: 'Exit', icon: IoExitOutline, href: '/login' },
]