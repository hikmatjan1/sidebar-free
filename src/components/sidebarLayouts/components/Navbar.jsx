import React from 'react';
import ProfileDropdown from './ProfileDropdown';
import { CgMenu } from 'react-icons/cg';
import ColorPalette from '../../ColorPalette';
import { useColor } from '../../../context/CounterContext';

function Navbar(props) {
    const { user, sidebarOptions, navbarOptions, openDrawerModalHandler, darkMode } = props;
    const { logoInfo } = sidebarOptions;
    const { bgColor = "#012C6E", height = "50px", visible = true, profileDropdownData = [], textColor, profileDropdownHandler } = navbarOptions;
    const { enabled, navbarColor } = useColor();

    return (
        <>
            <div className={`sticky top-0 left-0 z-20 border-b-[1px] sidebar_layout_navbar ${visible ? 'block' : 'block md:hidden'}`}
                style={{
                    backgroundColor: enabled ? darkMode : (navbarColor ? navbarColor?.navbarBgColor : bgColor),
                    height,
                    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
                }}
            >
                <div className="flex items-center justify-between px-4 h-full">
                    <div>
                        <div className='w-[26px] h-[26px] rounded-md cursor-pointer flex items-center justify-center bg-white md:hidden'
                            onClick={props.openSidebarMobileHandler}
                        >
                            <CgMenu className='text-black p-0.5' size={22} />
                        </div>
                    </div>

                    {visible ? (
                        <div className="flex items-center gap-3 justify-between">
                            {/* Theme Config */}
                            <ColorPalette openDrawerModalHandler={openDrawerModalHandler} />

                            <div className={`w-[1px] h-[20px] ${enabled ? 'bg-white/20' : 'bg-gray-200'} `}></div>

                            {/* Profile dropdown */}
                            <ProfileDropdown
                                user={user}
                                textColor={textColor}
                                profileDropdownData={profileDropdownData}
                                profileDropdownHandler={profileDropdownHandler}
                            />
                        </div>
                    ) : (
                        <div style={{ color: enabled ? "text-white" : textColor }}>{logoInfo?.logoName?.name}</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default React.memo(Navbar);