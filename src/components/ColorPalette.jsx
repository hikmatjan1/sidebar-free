import React, { memo } from 'react';
import { SlSettings } from "react-icons/sl";
import Tooltip from './Tooltip';

function ColorPalette(props) {
    return (
        <Tooltip content="Switcher" position="top" px="26px">
            <div className='cursor-pointer' onClick={props.openDrawerModalHandler}>
                <SlSettings size={18} color='gray' />
            </div>
        </Tooltip>
    )
}

export default memo(ColorPalette);