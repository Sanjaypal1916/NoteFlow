import React from 'react'

function Background() {
  return (
    <div className='fixed z-[2] w-full h-screen'>
      <div className='absolute top-14 w-full py-20 flex justify-center text-zinc-300 text-xl font-semibold shadows-into-light-regular'>Add Notes</div>
      <h1 className='absolute text-[10vw] text-zinc-500 leading-none tracking-tighter top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] nerko-one-regular'>NoteFlow</h1>
    </div>
  )
}

export default Background
