import React, { Fragment, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { classNames } from '../../../utils/options';
import Avatar from '../../../assets/Avatar.png';

function ProfileDropdown(props) {
    const { user, textColor, profileDropdownData } = props;
    const navigate = useNavigate();

    // navigate
    const navigateHandler = (event, item) => {
        props.profileDropdownHandler(event, item);
        navigate(item?.href);
    }

    return (
        <Menu as="div" className="relative">
            <div>
                <MenuButton className="flex max-w-xs items-center rounded-full dark:bg-dark pl-1 text-sm" style={{ color: textColor || "white" }}>
                    <span className="sr-only">Open user menu</span>
                    <span className='text-[13px] pr-2 dark:text-dark_text'>
                        {user?.name}
                    </span>
                    <img
                        className="h-8 w-8 rounded-full bg-white"
                        src={Avatar}
                        alt="Avatar"
                        style={{ boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em" }}
                    />
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
                <MenuItems className="absolute right-0 z-50 w-44 origin-top-right rounded-md py-1 shadow-lg bg-white">
                    {profileDropdownData?.length > 0 && profileDropdownData.map(item => (
                        <MenuItem key={item.name}>
                            {({ active }) => (
                                <span
                                    onClick={event => navigateHandler(event, item)}
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'px-3 py-2 text-xs text-gray-700 cursor-pointer flex items-center gap-2'
                                    )}
                                >
                                    <item.icon size={17} />
                                    {item.name}
                                </span>
                            )}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Transition>
        </Menu>
    )
}

export default memo(ProfileDropdown);