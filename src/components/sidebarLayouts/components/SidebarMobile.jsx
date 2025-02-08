import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import SidebarMenu from './SidebarMenu';
import Info from './Info';
import Exit from './Exit';
import Logo from './Logo';
import bg_grid from '../../../assets/bg-grid.png';

function SidebarMobile(props) {
    const { user, sidebarOptions, sidebarMobileOpen } = props;
    const { bgColor = "#012C6E", bgImage, sectionItem, info, logoInfo } = sidebarOptions;
    const [IsOpen, setIsOpen] = useState(sidebarMobileOpen);
    const modalRef = useRef();

    const handleClickOutside = useCallback((event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
            setTimeout(() => {
                props.closeSidebarMobileHandler();
            }, 200);
        }
    }, [IsOpen]);;

    // 
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // close sidebar
    const closeHandler = useCallback(() => {
        setIsOpen(false);
        setTimeout(() => {
            props.closeSidebarMobileHandler();
        }, 200);
    }, [IsOpen]);

    return (
        <div className='bg-black/40 fixed top-[0px] left-0 right-0 bottom-0 w-full z-30'>
            <div className={`flex transition-all overflow-hidden h-[100vh] sidebar_mobile ${IsOpen ? 'w-full xss:w-[80%] sidebar_mobile_animation_open' : 'w-0 sidebar_mobile_animation_close'}`} ref={modalRef}>
                <div className={`flex flex-grow flex-col dark:bg-dark h-full`} style={{ backgroundImage: `url(${bgImage || bg_grid})`, backgroundRepeat: "no-repeat", backgroundColor: bgColor }}>
                    <div className={`h-full flex-col text-white overflow-y-auto sidebar_layout_desktop`}>
                        <div className={`py-[24px] flex items-center justify-between pl-[20px] pr-[17px]`}>
                            <Logo logoInfo={logoInfo} />
                            <div className='rounded-[4px] cursor-pointer hover:bg-[#fff] transition-all group flex items-center justify-center'
                                style={{ boxShadow: "0px 0px 2px 1px #ffffff4D" }}
                                onClick={closeHandler}
                            >
                                <MdClose className='text-white group-hover:text-black' size={20} />
                            </div>
                        </div>

                        <nav className='px-[17px] h-auto flex flex-col justify-between'>
                            <div>
                                <SidebarMenu
                                    user={user}
                                    sections={props.sections}
                                    closeSidebarMobileHandler={props.closeSidebarMobileHandler}
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
        </div>
    )
}

export default memo(SidebarMobile);