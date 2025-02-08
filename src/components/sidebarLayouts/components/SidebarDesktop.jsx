import React, { memo } from 'react';
import SidebarMenu from './SidebarMenu';
import { MdChevronLeft } from "react-icons/md";
import Info from './Info';
import Exit from './Exit';
import Logo from './Logo';
import bg_grid from '../../../assets/bg-grid.png';

function SidebarDesktop(props) {
    const { user, openSidebarHandler, sidebarOpen, sidebarOptions } = props;
    const { bgColor = "#012C6E", bgImage, sectionItem, info, logoInfo } = sidebarOptions;

    return (
        <div className={`hidden md:fixed md:inset-y-0 md:flex ${sidebarOpen ? 'md:w-3' : 'md:w-80'} md:flex-col transition-all dark:border-r-[1px] dark:border-[#2f3436] overflow-hidden h-[100vh] z-20`}>
            <div className={`flex flex-grow flex-col dark:bg-dark h-full animated-bg`} style={{ backgroundImage: `url(${bgImage || bg_grid})`, backgroundColor: bgColor }}>
                <div className={`${sidebarOpen ? 'hidden' : 'flex '} h-full px-[12px] flex-col text-white overflow-y-auto sidebar_layout_desktop`}>
                    <div className={`py-[24px] pl-[10px] flex items-center justify-between`}>
                        <Logo logoInfo={logoInfo} />
                        <div className='rounded-[4px] cursor-pointer transition-all group flex items-center justify-center'
                            style={{ boxShadow: "0px 0px 2px 1px #ffffff4D" }}
                            onClick={openSidebarHandler}
                        >
                            <MdChevronLeft className='group-hover:text-black' size={20} style={{ color: logoInfo?.chevronLeftColor || "white" }} />
                        </div>
                    </div>

                    <nav className='h-full flex flex-col justify-between'>
                        <div>
                            <SidebarMenu
                                user={user}
                                sections={props.sections}
                                closeSidebarMobileHandler={() => { }}
                                sidebarOptions={sidebarOptions}
                            />

                            {/* exit */}
                            <Exit sectionItem={sectionItem} />
                        </div>

                        {/* extra option */}
                        <Info info={info} />
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default memo(SidebarDesktop);