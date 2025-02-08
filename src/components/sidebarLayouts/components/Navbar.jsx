import React from 'react';
import ProfileDropdown from './ProfileDropdown';
import { CgMenu } from 'react-icons/cg';

function Navbar(props) {
    const { user, navbarOptions } = props;
    const { bgColor = "#012C6E", height = "50px", visible = true, profileDropdownData = [], textColor, profileDropdownHandler } = navbarOptions;

    return (
        <>
            <div className={`sticky top-0 left-0 z-20 dark:text-white border-b-[1px] sidebar_layout_navbar font-montserrat_medium ${visible ? 'block' : 'block md:hidden'}`}
                style={{ backgroundColor: bgColor, height, boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}
            >
                <div className="flex items-center justify-between px-4 pl-0 h-full">
                    <div className="flex items-center justify-center">
                        <button
                            type="button"
                            className="px-4 text-gray-500 md:hidden"
                            onClick={props.openSidebarMobileHandler}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <CgMenu size={22} className='text-black' />
                        </button>
                    </div>
                    {visible && (
                        <div className="flex items-center gap-3 justify-between">

                            {/* Profile dropdown */}
                            <ProfileDropdown
                                user={user}
                                textColor={textColor}
                                profileDropdownData={profileDropdownData}
                                profileDropdownHandler={profileDropdownHandler}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default React.memo(Navbar);