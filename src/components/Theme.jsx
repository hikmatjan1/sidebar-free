import React, { memo } from 'react';
import { BiSolidCheckCircle, BiTrash } from 'react-icons/bi';
import Switch from './sidebarLayouts/components/Switch';
import { useColor } from '../context/CounterContext';
import { menuColors, navbarColors, sidebarBgImages, sidebarColors } from '../utils/options';

function Theme() {
    const { deleteColor, sidebarColor, menuColor, navbarColor, setColorSidebarHandler, setColorMenuHandler, setColorNavbarHandler, setSidebarImageHandler, sidebarImage } = useColor();

    // change sidebar color
    const changeSidebarColorsHandler = value => {
        setColorSidebarHandler(JSON.stringify(value));
    };

    // change menu color
    const changeMenuColorsHandler = value => {
        setColorMenuHandler(JSON.stringify(value));
    };

    // change navbar color
    const changeNavbarColorsHandler = value => {
        setColorNavbarHandler(JSON.stringify(value));
    };

    // change sidebar image
    const changeSidebarImageHandler = value => {
        setSidebarImageHandler(JSON.stringify(value));
    };

    // delete color
    const deleteItemHandler = () => {
        deleteColor(null);
    };

    return (
        <>
            <div className=''>
                <div className='flex items-center justify-between px-4 py-2'>
                    <div className='flex flex-col'>
                        <h6 className='font-inter_medium text-[13px] lg:text-[15px]'>Dark Mode</h6>
                        <span className='text-[12px] font-inter_regular text-gray-500'>Switch theme to dark mode</span>
                    </div>
                    {/* switch */}
                    <Switch />
                </div>
                <div className=''>
                    <div className='bg-[#F5F7FA] px-4 font-sans text-[13px] py-1 font-normal'>Sidebar Colors:</div>
                    <ul className='flex items-center gap-3 px-4 py-3 flex-wrap'>
                        {sidebarColors?.length > 0 && sidebarColors.map(item => (
                            <li key={item.id} className='w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer shadow-md'
                                style={{ backgroundColor: item?.sidebarBgColor }}
                                onClick={() => changeSidebarColorsHandler(item)}
                            >
                                {sidebarColor && sidebarColor.hasOwnProperty("id") && item.id == sidebarColor?.id && item.sidebarBgColor == sidebarColor?.sidebarBgColor && (
                                    <BiSolidCheckCircle className='text-green-700' size={20} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=''>
                    <div className='bg-[#F5F7FA] px-4 font-sans text-[13px] py-1 font-normal'>Menu Colors</div>
                    <ul className='flex items-center gap-3 px-4 py-3 flex-wrap'>
                        {menuColors?.length > 0 && menuColors.map(item => (
                            <li key={item.id} className='w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer shadow-md'
                                style={{ backgroundColor: item?.sidebarItemBgColor }}
                                onClick={() => changeMenuColorsHandler(item)}
                            >
                                {menuColor && menuColor.hasOwnProperty("id") && item.id == menuColor?.id && item.sidebarItemBgColor == menuColor?.sidebarItemBgColor && (
                                    <BiSolidCheckCircle className='text-green-700' size={20} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=''>
                    <div className='bg-[#F5F7FA] px-4 font-sans text-[13px] py-1 font-normal'>Navbar Colors</div>
                    <ul className='flex items-center gap-3 px-4 py-3 flex-wrap'>
                        {navbarColors?.length > 0 && navbarColors.map(item => (
                            <li key={item.id} className='w-[32px] h-[32px] rounded-full flex items-center justify-center cursor-pointer border shadow-md'
                                style={{ backgroundColor: item?.navbarBgColor }}
                                onClick={() => changeNavbarColorsHandler(item)}
                            >
                                {navbarColor && navbarColor.hasOwnProperty("id") && item.id == navbarColor?.id && item.navbarBgColor == navbarColor?.navbarBgColor && (
                                    <BiSolidCheckCircle className='text-green-700' size={20} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=''>
                    <div className='bg-[#F5F7FA] px-4 font-sans text-[13px] py-1 font-normal'>Sidebar With Background Image:</div>
                    <ul className='flex items-center gap-4 px-4 py-3 flex-wrap'>
                        {sidebarBgImages?.length > 0 && sidebarBgImages.map(item => (
                            <li key={item.id} className='w-[56px] h-[90px] rounded-[4px] flex items-center justify-center cursor-pointer border shadow-md relative bg-black/90'
                                onClick={() => changeSidebarImageHandler(item)}
                            >
                                <img src={item?.sidebarImage} alt="" className='absolute top-0 left-0 w-full h-full' />
                                {sidebarImage && sidebarImage.hasOwnProperty("id") && item.id == sidebarImage?.id && item.sidebarImage == sidebarImage?.sidebarImage && (
                                    <BiSolidCheckCircle className='text-green-700 absolute inset-0 m-auto' size={20} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='flex items-center p-3 gap-1 cursor-pointer' onClick={deleteItemHandler}>
                <BiTrash color='red' />
                <span className='text-red-700 text-[12px]'>Clear all selections</span>
            </div>
        </>
    )
}

export default memo(Theme);