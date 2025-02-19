import React, { memo, useCallback, useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { PiMicrophoneSlashLight, PiMicrophone } from "react-icons/pi";
import { useColor } from '../context/CounterContext';
import Tooltip from './Tooltip';

function Speech() {
    const [isOpen, setIsOpen] = useState(false);
    const { transcript, resetTranscript } = useSpeechRecognition();
    const { onSwitchHandler, openSidebarHandler, closeSidebarHandler } = useColor();
    const commands = [
        {
            command: ['opensidebar', "sidebaropen", 'openleftbar'],
            callback: () => closeSidebarHandler()
        },
        {
            command: ['closesidebar', 'sidebarclose', 'closeleftbar'],
            callback: () => openSidebarHandler()
        },
        {
            command: ['dark'],
            callback: () => {
                document.querySelector('#root').classList.add("dark");
                onSwitchHandler(true);
            }
        },
        {
            command: ['light'],
            callback: () => {
                document.querySelector('#root').classList.remove("dark");
                onSwitchHandler(false);
            }
        },
        {
            command: ['stop'],
            callback: () => {
                stopHandler();
            }
        },
    ]

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <span className='text-[9px]'></span> // Speech recognition is not supported in this browser.
    }

    // Waits 1 second, then `handleCommand` runs
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (transcript) {
                handleCommand(transcript);
            }
        }, 500); // Waits 1 second, then `handleCommand` runs

        return () => clearTimeout(timeout); // Har yangi so‘zda eski timeout to‘xtatiladi
    }, [transcript]);

    // start 
    const startHandler = useCallback(() => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
        setIsOpen(true);
    }, []);

    // stop 
    const stopHandler = useCallback(() => {
        SpeechRecognition.stopListening();
        resetTranscript();
        setIsOpen(false);
    }, []);

    // handle command
    const handleCommand = () => {
        const command = transcript.toLowerCase().split(" ").join("");
        let result = commands.find(e => e.command.includes(command));
        if (result) result.callback();
        resetTranscript();
    };

    return (
        <Tooltip content="Voice control" position="top" px="26px">
            <div className='relative cursor-pointer w-[18px] h-[18px] hidden md:block'>
                {!isOpen ? (
                    <PiMicrophoneSlashLight size={16} className='mic-icon_sidebar_infinity_gray' onClick={startHandler} />
                ) : (
                    <div className="box_sidebar_infinity">
                        <div className="object_sidebar_infinity">
                            <div className="outline_sidebar_infinity">
                            </div>
                            <div className="outline_sidebar_infinity" id="delayed">
                            </div>
                            <div className="button_sidebar_infinity">
                            </div>
                            <div className="button_sidebar_infinity flex items-center justify-center" id="circlein">
                                <PiMicrophone size={16} className='mic-icon_sidebar_infinity' onClick={stopHandler} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Tooltip>
    )
}

export default memo(Speech);