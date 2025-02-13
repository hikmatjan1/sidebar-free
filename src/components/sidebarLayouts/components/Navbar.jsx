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
            <div className={`sticky top-0 left-0 z-20 dark:text-white border-b-[1px] sidebar_layout_navbar ${visible ? 'block' : 'block md:hidden'}`}
                style={{
                    backgroundColor: enabled ? darkMode : (navbarColor ? navbarColor?.navbarBgColor : bgColor),
                    height,
                    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
                }}
            >
                <div className="flex items-center justify-between px-4 pl-0 h-full">
                    <div className="flex items-center justify-center">
                        <button
                            type="button"
                            className="px-4 text-gray-500 md:hidden"
                            onClick={props.openSidebarMobileHandler}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <CgMenu size={22} className='text-black bg-white rounded-sm p-0.5' />
                        </button>
                    </div>
                    {visible ? (
                        <div className="flex items-center gap-3 justify-between">
                            {/* color palette */}
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