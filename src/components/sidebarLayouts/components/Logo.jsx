import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function Logo({ logoInfo }) {
    return (
        <Link to="/" className='w-full'>
            <div className='flex items-center gap-[8px] cursor-pointer w-full'>
                {logoInfo?.visibleLogo && (
                    <img
                        src={logoInfo?.image || "https://i.postimg.cc/m2rrFBzL/logo.png"}
                        alt="logo"
                        style={{ width: logoInfo?.width || "38px", height: logoInfo?.height || "38px", borderRadius: logoInfo?.borderRadius || "4px" }}
                    />
                )}
                {(!logoInfo?.logoName.hasOwnProperty("visible") || logoInfo?.logoName?.visible) && (
                    <div className='flex flex-col leading-[18px]'
                        style={{ color: logoInfo?.textColor || "white" }}
                    >
                        <div className='sidebar_menu_line_clamp w-[150px] md:w-[180px]' title={logoInfo?.logoName?.name}>
                            <span
                                style={{ fontSize: logoInfo?.logoName?.fontSize }}
                            >
                                {logoInfo?.logoName?.name}
                            </span>
                        </div>
                        <div className='overflow-hidden w-[150px] md:w-[180px]'>
                            <div className='text-[10px] sidebar_menu_line_clamp' title={logoInfo?.logoName?.info}>
                                <span>{logoInfo?.logoName?.info}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Link>
    )
}

export default memo(Logo);