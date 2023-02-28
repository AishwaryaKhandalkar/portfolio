import React from 'react'
import { saveFile } from './Header'
import { openInNewTab } from './Header'

function Contact() {
  return (
    <section id='contact'>
      <div className='inner'>
        <p>I'm currently looking for any new opportunities. </p>
        <p>In case you'd like to contact me for any opportunities, advice, or just a chat, please feel free to contact me!</p>
        <p className='mt-8'>You can reach me at <a aria-label='Github' href='#' onClick = {() => openInNewTab("https://github.com/AishwaryaKhandalkar")} className='link text-teal-300 hover:text-white'>Github</a>, <a href='mailto:ash.khandalkar@gmail.com' className='link text-teal-300 hover:text-white'>Mail</a>, <a href='#' className='link text-teal-300 hover:text-white' onClick = {() => openInNewTab("https://www.linkedin.com/in/aishwaryakhandalkar948/")} aria-label="Linkedin">Linkedin</a></p>
        <p className='mt-4'>You can download my <a className='text-teal-300 hover:text-white' href="#" onClick={saveFile}>resume</a>.</p>
      </div>
    </section>
  )
}

export default Contact