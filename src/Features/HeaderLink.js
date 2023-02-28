import { click } from '@testing-library/user-event/dist/click';
import React from 'react'

const HeaderLink = ({id, activeLink, setActiveLink, handleClick, title, href, setClick}) => {
    function handleClick() {
        setActiveLink(id);
        setClick(!click);
    }

  return (
    <a onClick={handleClick} href={href} className={ activeLink === id ? 'text-white block mt-4 lg:inline-block lg:mt-0 mr-4' : 'notactive block mt-4 lg:inline-block lg:mt-0 text-teal-300 hover:text-white active:text-white focus:text-white mr-4'}>
        {title}
    </a>
  )
}

export default HeaderLink