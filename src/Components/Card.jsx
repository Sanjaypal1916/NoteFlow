import React from 'react';
import { LuDownload } from "react-icons/lu";
import { MdNoteAlt } from "react-icons/md";

function Card() {
    return (
        <div className='relative w-60 h-72 bg-zinc-900/90 rounded-[50px] text-zinc-500 px-5 py-10 shadows-into-light-regular overflow-hidden'>
            <MdNoteAlt />
            <p className='text-sm mt-3 leading-tight shadows-into-light-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error totam quaerat explicabo.</p>
            <div className='footer absolute bottom-0 bg-green-700/10 w-full h-16  py-3 px-8 left-0'>
                <div className='flex items-center justify-between mb-5'>
                    <p>4.5mb</p>
                    <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                        <LuDownload />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
