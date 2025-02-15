export const sidebar_sections = [
    { id: 1, name: 'Home', icons: { bgColor: "#2BC840", icon: "https://i.postimg.cc/90NNkmFt/default.png", }, href: "/", dropdown: false },
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
                    { id: 7, name: 'Sub Menu 1', href: '/catalog/menu/submenu1', dropdown: false },
                    { id: 8, name: 'Sub Menu 2', href: '/catalog/menu/submenu2', dropdown: false },
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