import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { openInNewTab } from './Header'

function Socials() {
  return (
    <div className='socials'>
        <ul>
            <li className='my-3'>
                <a href='#' className='hover:text-teal-300' onClick = {() => openInNewTab("https://www.linkedin.com/in/aishwaryakhandalkar948/")} aria-label="Linkedin">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </li>
            <li className='my-3'>
                <a className='hover:text-teal-300' href='mailto:ash.khandalkar@gmail.com' aria-label="Gmail" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </li>
            <li className='my-3'>
                <a href="#" className='hover:text-teal-300' aria-label='Github' onClick = {() => openInNewTab("https://github.com/AishwaryaKhandalkar")}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li className="border-l ml-2 h-44 social-border w-1 inline-block"></li>
        </ul>
    </div>
  )
}

export default Socials