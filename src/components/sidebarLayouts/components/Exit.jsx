import React, { memo } from 'react';
import { IoMdExit } from "react-icons/io";

function Exit({ sectionItem }) {
    const { exit } = sectionItem;

    return (
        (!exit.hasOwnProperty("visible") || exit?.visible) && (
            <div
                className='cursor-pointer flex items-center gap-[15px]'
                style={{
                    color: sectionItem?.textColor || "#fff",
                    backgroundColor: sectionItem?.bgColor || "#002361",
                    borderRadius: sectionItem?.borderRadius || "7px",
                    padding: `${sectionItem?.paddingY || "8px"} ${sectionItem?.paddingX || "14px"}`,
                    fontSize: sectionItem?.fontSize || "11px"
                }}
                onClick={exit?.onExitHandler || null}>
                <div className={`w-[30px] h-[30px] rounded-[6px] bg-red-700 flex items-center justify-center`}>
                    <IoMdExit size={16} />
                </div>
                <span className='font-montserrat_medium'>{exit?.name || "Exit"}</span>
            </div>
        )
    )
}

export default memo(Exit);