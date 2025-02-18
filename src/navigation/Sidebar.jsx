import React from 'react';
import { Routes } from 'react-router-dom';
import SidebarLayouts from '../components/sidebarLayouts/SidebarLayouts';
import { getAllRoutes } from '../components/getAllRoutes';

function Sidebar(props) {
    const { user, routes = [], sections = [], sidebarOptions, navbarOptions, darkMode = "#121212" } = props;

    return (
        <div className='sidebar_layout relative font-inter_medium'>
            <SidebarLayouts user={user} sections={sections} sidebarOptions={sidebarOptions} navbarOptions={navbarOptions} darkMode={darkMode}>
                <Routes>
                    {getAllRoutes(routes)}
                </Routes>
            </SidebarLayouts>
            {/* {user.token ? (
        ) : (
            <Routes>
                {privateRoutesMenu}
                <Route path='*' element={<Navigate to="/login" replace />} />
            </Routes>
        )} */}
        </div>
    )
}

export default Sidebar;

// 📌 Routes faqat `App.jsx` ichida bo‘lishi kerak 