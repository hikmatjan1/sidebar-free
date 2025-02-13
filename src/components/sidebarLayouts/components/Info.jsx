import React, { memo } from 'react';
import { useColor } from '../../../context/CounterContext';

function Info({ info, sectionItem }) {
    const { menuColor, enabled } = useColor();
    const { darkMode = "#292727" } = sectionItem;

    return (
        (!info.hasOwnProperty("visible") || info?.visible) && (
            <div className='mt-[43px] flex flex-col gap-[41px] mb-[20px]'>
                <div className='pt-[15px] pb-[28px] px-[24px] rounded-[14px] flex flex-col'
                    style={{
                        backgroundColor: enabled ? darkMode : (menuColor ? menuColor?.sidebarItemBgColor : (info?.bgColor ? info.bgColor : "#002361")),
                    }}
                >
                    <h2 className='text-[14px] font-semibold'>{info?.content?.top || "Need help?"}</h2>
                    <span className='text-[12px] mt-[5px]'>{info?.content?.bottom || "Check out our documentation"}</span>
                    <div className='pt-[8px] pb-[10px] rounded-[8px] mt-[12px] font-semibold text-center text-[11px] cursor-pointer transition-all'
                        style={{ backgroundColor: info?.content?.btn?.bgColor || "#fff", color: info?.content?.btn?.textColor || "#012C6E", fontSize: info?.content?.btn?.fontSize || "11px", }}
                        onClick={info?.content?.btn?.viewInfoHandler || null}
                    >
                        {info?.content?.btn?.name || "Documentation"}
                    </div>
                </div>
            </div>
        )
    )
}

export default memo(Info);