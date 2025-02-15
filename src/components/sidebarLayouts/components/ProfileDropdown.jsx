import React, { Fragment, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { GoChevronRight } from "react-icons/go";
import { useColor } from '../../../context/CounterContext';

function ProfileDropdown(props) {
    const { user, textColor, profileDropdownData } = props;
    const navigate = useNavigate();
    const { enabled } = useColor();

    // navigate
    const navigateHandler = (event, item) => {
        props.profileDropdownHandler(event, item);
        navigate(item?.href);
    }

    return (
        <Menu as="div" className="relative font-inter_medium">
            {({ open }) => (
                <>
                    <div>
                        <MenuButton className="flex max-w-xs items-center rounded-full pl-1 text-sm" style={{ color: enabled ? "white" : (textColor || "white") }}>
                            <span className="sr-only">Open user menu</span>
                            <span className='text-[13px] pr-2'>
                                {user?.name}
                            </span>
                            <div className='flex items-center gap-3'>
                                <img
                                    className="h-8 w-8 rounded-full bg-white"
                                    src={user?.image || "https://i.postimg.cc/T1JW294t/Avatar.png"}
                                    alt="Avatar"
                                    style={{ boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em" }}
                                />
                                <GoChevronRight color='gray' size={17} className={`transition-all ${open ? '-rotate-90' : 'rotate-90'}`} />
                            </div>
                        </MenuButton>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <MenuItems className="absolute right-0 z-50 w-44 origin-top-right top-9 rounded-md py-1 shadow-lg bg-white">
                            {profileDropdownData?.length > 0 && profileDropdownData.map(item => (
                                <MenuItem key={item.name}>
                                    <span
                                        onClick={event => navigateHandler(event, item)}
                                        className='px-3 py-3 text-[13px] text-gray-700 cursor-pointer flex items-center gap-2'
                                    >
                                        <img src={item.icon} alt="image icon" className='w-[18px]' />
                                        {item.name}
                                    </span>
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Transition>
                </>
            )}
        </Menu>
    )
}

export default memo(ProfileDropdown);