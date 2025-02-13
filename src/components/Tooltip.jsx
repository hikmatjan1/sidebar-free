import React, { memo } from 'react';

function Tooltip(props) {
    return (
        <div className="relative flex flex-col items-center group">
            {props.children}
            <div className="absolute flex-col items-center w-max hidden group-hover:flex"
                style={{ [props.position]: props.px }}
            >
                {props.position == "top" && (
                    <div className="absolute -top-1 left-0 right-0 m-auto w-3 h-3 rotate-45"
                        style={{
                            background: "linear-gradient(0deg, rgba(65,67,72,1) 23%, rgba(130,126,132,1) 81%)"
                        }}
                    ></div>
                )}
                <span className="relative rounded-md z-10 p-4 py-2 text-[11px] leading-none text-white whitespace-no-wrap shadow-lg"
                    style={{
                        background: "linear-gradient(0deg, rgba(65,67,72,1) 23%, rgba(130,126,132,1) 81%)"
                    }}
                >
                    {props.content}
                </span>
                {props.position == "bottom" && (
                    <div className="absolute -bottom-1 left-0 right-0 m-auto w-3 h-3 rotate-45"
                        style={{
                            background: "linear-gradient(0deg, rgba(65,67,72,1) 23%, rgba(130,126,132,1) 81%)"
                        }}
                    ></div>
                )}
            </div>
        </div>
    )
}

export default memo(Tooltip);