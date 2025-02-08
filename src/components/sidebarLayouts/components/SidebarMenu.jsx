import React, { useRef, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { classNames } from '../../../utils/options';
import right_icon from '../../../assets/right.svg';

function SidebarMenu(props) {
    const { user, sections, sidebarOptions } = props;
    const { sectionItem } = sidebarOptions;
    const buttonRefs = useRef([]);
    const button1Refs = useRef([]);
    const openedRef = useRef(null);
    const opened1Ref = useRef(null);

    // for outline dropdown
    const clickRecent = (index) => {
        const clickedButton = buttonRefs.current[index];
        if (clickedButton === openedRef.current) {
            openedRef.current = null;
            return;
        }
        if (Boolean(openedRef.current?.getAttribute("data-value"))) {
            openedRef.current?.click();
        }
        openedRef.current = clickedButton;
    };

    // for inline dropdown
    const clickRecentInline = (index) => {
        const clickedButton = button1Refs.current[index];
        if (clickedButton === opened1Ref.current) {
            opened1Ref.current = null;
            return;
        }
        if (Boolean(opened1Ref.current?.getAttribute("data-value"))) {
            opened1Ref.current?.click();
        }
        opened1Ref.current = clickedButton;
    };

    return (
        sections?.length > 0 && sections.map((item, i) => {
            return (
                <section key={item.id} className='block'
                    style={{ fontSize: sectionItem?.fontSize || "12px" }}
                >
                    <div key={item.id}>
                        {!item.dropdown ? (
                            <div className={`${i !== navigation?.length - 1 && 'pb-[10px]'}`}>
                                <NavLink end to={item.href} onClick={props.closeSidebarMobileHandler} className="">
                                    {({ isActive }) => (
                                        <div
                                            className={`group overflow-hidden`}
                                            style={{
                                                color: isActive ? (sectionItem?.activeColor || "#FFB620") : (sectionItem?.textColor || "#fff"),
                                                backgroundColor: sectionItem?.bgColor || "#002361",
                                                borderRadius: sectionItem?.borderRadius || "7px",
                                                padding: `${sectionItem?.paddingY || "8px"} ${sectionItem?.paddingX || "14px"}`,
                                            }}
                                            title={item.name}
                                        >
                                            <div className='flex items-center gap-[15px] w-max'>
                                                {item.icons?.icon && (
                                                    <div className={`w-[30px] h-[30px] rounded-[6px] flex items-center justify-center`}
                                                        style={{ backgroundColor: item.icons?.bgColor }}
                                                    >
                                                        <img src={item.icons?.icon} alt="icon" />
                                                    </div>
                                                )}
                                                <div className='text-left sidebar_menu_line_clamp'>
                                                    <span className=''>{item.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </NavLink>
                            </div>
                        ) : (
                            <div className={`${i !== navigation?.length - 1 && 'pb-[10px]'}`}>
                                <Disclosure as="div" className={`w-full`}>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton
                                                className={classNames(`group w-full flex items-center justify-between overflow-hidden`)}
                                                data-value={open}
                                                ref={(ref) => {
                                                    buttonRefs.current[i] = ref;
                                                }}
                                                title={item.name}
                                                style={{
                                                    color: open ? (sectionItem?.activeColor || "#FFB620") : (sectionItem?.textColor || "#fff"),
                                                    backgroundColor: sectionItem?.bgColor || "#002361",
                                                    borderRadius: sectionItem?.borderRadius || "7px",
                                                    padding: `${sectionItem?.paddingY || "8px"} ${sectionItem?.paddingX || "14px"}`
                                                }}
                                                onClick={() => clickRecent(i)}
                                            >
                                                <div className='flex items-center gap-[15px] sidebar_menu_line_clamp'>
                                                    {item.icons?.icon && (
                                                        <div className={`w-[30px] h-[30px] rounded-[6px] flex items-center justify-center`}
                                                            style={{ backgroundColor: item.icons?.bgColor }}
                                                        >
                                                            <img src={item.icons?.icon} alt="icon" />
                                                        </div>
                                                    )}
                                                    <div className='text-left sidebar_menu_line_clamp'>
                                                        <span className=''>{item.name}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={right_icon} alt="no image"
                                                        className={classNames(
                                                            open ? 'rotate-90 ' : 'dark:text-dark_text',
                                                            'transition-all w-[6px]'
                                                        )}
                                                    />
                                                </div>
                                            </DisclosureButton>
                                            <DisclosurePanel>
                                                {item.menu?.length > 0 && item.menu.map((elem, idx) => (
                                                    !elem.dropdown ? (
                                                        <div key={elem.id} className={`${idx !== item.menu?.length - 1 && 'pb-[10px]'} ${idx === 0 && 'pt-[10px]'}`}>
                                                            <div className='w-full'>
                                                                <NavLink key={elem.id} end to={elem.href} onClick={props.closeSidebarMobileHandler} className="flex items-center relative">
                                                                    {({ isActive }) => (
                                                                        <>
                                                                            <div className='flex items-center justify-center px-[15px] '>
                                                                                <div className='w-[14px] h-[14px] rounded-full bg-white flex items-center justify-center'>
                                                                                    <div
                                                                                        className={`w-[8px] h-[8px] rounded-full`}
                                                                                        style={{ backgroundColor: isActive ? (sectionItem?.activeColor || "#FFB620") : "#D8DBE4" }}
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                            {(idx !== item.menu?.length - 1) && (
                                                                                <div className='absolute top-[62%] left-0 right-0 h-full w-[2px] px-[21.5px]'>
                                                                                    <div className='w-[1px] h-full bg-[#fff]'></div>
                                                                                </div>
                                                                            )}
                                                                            <div
                                                                                className={classNames('group relative w-full overflow-hidden')}
                                                                                title={elem.name}
                                                                                style={{
                                                                                    color: isActive ? (sectionItem?.activeColor || "#FFB620") : (sectionItem?.textColor || "#fff"),
                                                                                    backgroundColor: sectionItem?.bgColor || "#002361",
                                                                                    borderRadius: sectionItem?.borderRadius || "7px",
                                                                                    padding: `${sectionItem?.paddingY || "8px"} ${sectionItem?.paddingX || "14px"}`
                                                                                }}
                                                                            >
                                                                                <div className='sidebar_menu_line_clamp'>
                                                                                    <span className=''>
                                                                                        {elem.name}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <Disclosure as="div" key={elem.id} className={`${idx !== item.menu?.length - 1 && 'pb-[10px]'} ${idx === 0 && 'pt-[10px]'}`}>
                                                            {({ open }) => (
                                                                <>
                                                                    <div className='flex items-center relative'>
                                                                        <div className='flex items-center justify-center px-[15px] '>
                                                                            <div className='w-[14px] h-[14px] rounded-full bg-white flex items-center justify-center'>
                                                                                <div
                                                                                    className={`w-[8px] h-[8px] rounded-full `}
                                                                                    style={{ backgroundColor: open ? (sectionItem?.activeColor || "#FFB620") : "#D8DBE4" }}
                                                                                ></div>
                                                                            </div>
                                                                        </div>
                                                                        {(idx !== item.menu?.length - 1 && !open) && (
                                                                            <div className='absolute top-[62%] left-0 right-0 h-full w-[2px] px-[21.5px]'>
                                                                                <div className='w-[1px] h-full bg-[#fff]'></div>
                                                                            </div>
                                                                        )}
                                                                        <DisclosureButton
                                                                            className={classNames(`group w-full flex items-center justify-between relative overflow-hidden`)}
                                                                            data-value={open}
                                                                            ref={(ref) => {
                                                                                button1Refs.current[idx] = ref;
                                                                            }}
                                                                            title={elem.name}
                                                                            style={{
                                                                                color: open ? (sectionItem?.activeColor || "#FFB620") : (sectionItem?.textColor || "#fff"),
                                                                                backgroundColor: sectionItem?.bgColor || "#002361",
                                                                                borderRadius: sectionItem?.borderRadius || "7px",
                                                                                padding: `${sectionItem?.paddingY || "8px"} ${sectionItem?.paddingX || "14px"}`
                                                                            }}
                                                                            onClick={() => clickRecentInline(idx)}
                                                                        >
                                                                            <div className='text-left sidebar_menu_line_clamp'>
                                                                                <span className=''>{elem.name}</span>
                                                                            </div>
                                                                            <div>
                                                                                <img src={right_icon} alt="no image"
                                                                                    className={classNames(
                                                                                        open ? 'rotate-90 ' : 'dark:text-dark_text',
                                                                                        'transition-all w-[6px]'
                                                                                    )}
                                                                                />
                                                                            </div>
                                                                        </DisclosureButton>
                                                                    </div>
                                                                    <DisclosurePanel className="relative">
                                                                        {elem.menu?.length > 0 && elem.menu.map((element, elementIndex) => (
                                                                            <div key={element.id} className={`${elementIndex !== elem.menu?.length - 1 && 'pb-[10px]'} ${elementIndex === 0 && 'pt-[10px]'} pl-[43px]`}>
                                                                                <NavLink key={element.id} end to={element.href} onClick={props.closeSidebarMobileHandler} className="flex items-center relative">
                                                                                    {({ isActive }) => (
                                                                                        <>
                                                                                            <div className='flex items-center justify-center px-[15px] '>
                                                                                                <div className='w-[14px] h-[14px] rounded-full bg-white flex items-center justify-center'>
                                                                                                    <div
                                                                                                        className={`w-[8px] h-[8px] rounded-full`}
                                                                                                        style={{ backgroundColor: isActive ? (sectionItem?.activeColor || "#FFB620") : "#D8DBE4" }}
                                                                                                    ></div>
                                                                                                </div>
                                                                                            </div>
                                                                                            {(elementIndex !== elem.menu?.length - 1) && (
                                                                                                <div className='absolute top-[62%] left-0 right-0 h-full w-[2px] px-[21.5px]'>
                                                                                                    <div className='w-[1px] h-full bg-[#fff]'></div>
                                                                                                </div>
                                                                                            )}
                                                                                            <div
                                                                                                className={classNames('group w-full flex items-center justify-between overflow-hidden')}
                                                                                                title={element.name}
                                                                                                style={{
                                                                                                    color: isActive ? (sectionItem?.activeColor || "#FFB620") : (sectionItem?.textColor || "#fff"),
                                                                                                    backgroundColor: sectionItem?.bgColor || "#002361",
                                                                                                    borderRadius: sectionItem?.borderRadius || "7px",
                                                                                                    padding: `${sectionItem?.paddingY || "8px"} ${sectionItem?.paddingX || "14px"}`
                                                                                                }}
                                                                                            >
                                                                                                <div className='h-full text-left sidebar_menu_line_clamp'>
                                                                                                    <span className=''>{element.name}</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </>
                                                                                    )}
                                                                                </NavLink>
                                                                            </div>
                                                                            // )
                                                                        ))}
                                                                    </DisclosurePanel>
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    )
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </div >
                        )}
                    </div >
                </section >
            )
        })
    )
}

export default memo(SidebarMenu);