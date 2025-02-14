import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import Theme from './Theme';

function Drawer(props) {
    const [IsOpen, setIsOpen] = useState(props.IsOpen);
    const modalRef = useRef();

    const handleClickOutside = useCallback((event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
            setTimeout(() => {
                props.closeModal();
            }, 100);
        }
    }, [IsOpen]);

    // modal closing when clicked out
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // close sidebar
    const closeHandler = useCallback(() => {
        setIsOpen(false);
        setTimeout(() => {
            props.closeModal();
        }, 100);
    }, [IsOpen]);

    return (
        <div className={`absolute inset-0 bg-black/20 z-20 drawer_animation_open text-black`}>
            <div className={`absolute top-0 right-0 bottom-0 flex transition-all overflow-hidden h-[100vh] bg-white ${IsOpen ? 'w-full xs:w-[375px] drawer_open' : 'w-0 drawer_close'} z-20`} ref={modalRef}>
                <div className='w-full h-[100vh] overflow-y-scroll drawer_visible_content'>
                    <div className='flex items-center justify-between w-full p-4 py-3'>
                        <h3 className='text-[16px] lg:text-[18px]'>Theme Config</h3>
                        <MdClose size={18} className='cursor-pointer' onClick={closeHandler} />
                    </div>
                    <hr />

                    <Theme />
                </div>
            </div>
        </div>
    )
}

export default memo(Drawer);