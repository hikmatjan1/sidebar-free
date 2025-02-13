import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SidebarLayouts from '../components/sidebarLayouts/SidebarLayouts';

function Sidebar(props) {
    const { user, routes = [], sections = [], sidebarOptions, navbarOptions, darkMode = "#121212" } = props;

    // routes
    const menu = routes.map((route, index) => {
        return route.component ? (
            <Route
                key={index}
                path={route.path}
                name={route.name}
                element={<route.component />}
            />
        ) : null;
    });

    return (
        <div className='sidebar_layout relative font-inter_medium'>
            <SidebarLayouts user={user} sections={sections} sidebarOptions={sidebarOptions} navbarOptions={navbarOptions} darkMode={darkMode}>
                <Routes>
                    {menu}
                </Routes>
            </SidebarLayouts>
        </div>
    )
}

export default Sidebar;