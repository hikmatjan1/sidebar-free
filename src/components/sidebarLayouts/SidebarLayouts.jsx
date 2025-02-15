import React, { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LuArrowRightToLine } from "react-icons/lu";
import SidebarDesktop from './components/SidebarDesktop';
import Navbar from './components/Navbar';
import SidebarMobile from './components/SidebarMobile';
import Drawer from '../Drawer';
import { useColor, ValueProvider } from '../../context/CounterContext';

const SidebarLayouts = (props) => {
    const { children, user, sidebarOptions, navbarOptions, darkMode } = props;
    const { bgColor = "#012C6E", logoInfo } = sidebarOptions;
    const { enabled, sidebarColor } = useColor();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);
    const [openDrawerModal, setOpenDrawerModal] = useState(false);

    // open sidebar (desktop)
    const openSidebarHandler = useCallback(() => {
        setSidebarOpen(true);
    }, [sidebarOpen]);

    // close sidebar (desktop)
    const closeSidebarHandler = useCallback(() => {
        setSidebarOpen(false);
    }, [sidebarOpen]);

    // open sidebar (mobile)
    const openSidebarMobileHandler = useCallback(() => {
        setSidebarMobileOpen(true);
    }, [sidebarMobileOpen]);

    // close sidebar (mobile)
    const closeSidebarMobileHandler = useCallback(() => {
        setSidebarMobileOpen(false);
    }, [sidebarMobileOpen]);

    // open drawer rightbar
    const openDrawerModalHandler = useCallback(() => {
        setOpenDrawerModal(true);
    }, [openDrawerModal]);

    // close drawer rightbar
    const closeDrawerModalHandler = useCallback(() => {
        setOpenDrawerModal(false);
    }, [openDrawerModal]);

    return (
        <ValueProvider>
            <div className='w-full text-white relative'>

                {/* for desktop */}
                <SidebarDesktop
                    user={user}
                    darkMode={darkMode}
                    openSidebarHandler={openSidebarHandler}
                    sidebarOpen={sidebarOpen}
                    sections={props.sections}
                    sidebarOptions={sidebarOptions}
                />

                {/* for mobile */}
                {sidebarMobileOpen && (
                    <SidebarMobile
                        user={user}
                        darkMode={darkMode}
                        sections={props.sections}
                        sidebarOptions={sidebarOptions}
                        sidebarMobileOpen={sidebarMobileOpen}
                        openSidebarMobileHandler={openSidebarMobileHandler}
                        closeSidebarMobileHandler={closeSidebarMobileHandler}
                    />
                )}


                <div className={`flex flex-col transition-all ${sidebarOpen ? 'pl-0 md:pl-3' : 'md:pl-80'}`}>
                    {/* navbar  */}
                    <Navbar
                        user={user}
                        darkMode={darkMode}
                        sidebarOptions={sidebarOptions}
                        navbarOptions={navbarOptions}
                        sidebarOpen={sidebarOpen}
                        openSidebarMobileHandler={openSidebarMobileHandler}
                        openDrawerModalHandler={openDrawerModalHandler}
                    />

                    {/* icon display when sidebar is closed */}
                    <div
                        className={`w-[26px] h-[26px] rounded-md cursor-pointer flex-col items-center justify-center absolute top-[12px] transition-all group ${sidebarOpen ? 'hidden md:flex' : 'hidden'} rotate-180 z-30 left-[6px]`}
                        style={{
                            boxShadow: "0px 0px 2px 1px #ffffff4D",
                            backgroundColor: enabled ? darkMode : (localStorage.getItem("sidebar_color") ? JSON.parse(localStorage.getItem("sidebar_color"))?.sidebarBgColor : bgColor),
                        }}
                        onClick={closeSidebarHandler}
                    >
                        <LuArrowRightToLine className='group-hover:text-white -rotate-180' size={12} style={{ color: logoInfo?.chevronLeftColor || "white" }} />
                    </div>

                    {/* children */}
                    <main className={`bg-white relative z-10 text-black sidebar_layout_content overflow-y-scroll`}
                        style={{ height: `calc(100vh - ${navbarOptions?.height || "0px"})` }}
                    >
                        <div className=''>
                            {children}

                            <Outlet />
                        </div>
                    </main>
                </div>

                {/* drawer modal */}
                {openDrawerModal && (
                    <Drawer
                        closeModal={closeDrawerModalHandler}
                        IsOpen={openDrawerModal}
                    />
                )}
            </div>
        </ValueProvider>
    )
}

export default SidebarLayouts;