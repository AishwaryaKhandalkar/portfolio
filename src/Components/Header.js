import React from 'react'
import {saveAs} from "file-saver";
import HeaderLink from '../Features/HeaderLink';

export const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1Y0E_WJonvQLvkDLEDw--7UQVyH9Xj_d7/view?usp=sharing",
      "AK.pdf"
    );
}

export const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
        newWindow.opener = null;
    }
};

function Header() {
    const [click, setClick] = React.useState(false)
    const handleHeaderClick = () => setClick(!click)

    const [activeLink, setActiveLink] = React.useState("menu0");

    return (
        <header className='flex items-center justify-between w-full fixed top-0 px-7'>
            <nav className="flex items-center justify-between flex-wrap w-full p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight"></span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={handleHeaderClick} className="flex items-center px-3 py-2 border rounded text-teal-300 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className={click ? "block w-full flex-grow lg:flex lg:items-center lg:w-auto": "hidden w-full flex-grow lg:flex lg:items-center lg:w-auto"}>
                    <div className="text-sm lg:flex-grow lg:text-right">
                        <HeaderLink id="menu1" href='#about' activeLink={activeLink} setActiveLink={setActiveLink} setClick={setClick} click={click} title='About'/>
                        <HeaderLink id="menu2" href="#experience" activeLink={activeLink} setActiveLink={setActiveLink} setClick={setClick} click={click} title='Experience'/>
                        <HeaderLink id="menu3" href="#work" activeLink={activeLink} setActiveLink={setActiveLink} setClick={setClick} click={click} title='Projects'/>
                        <HeaderLink id="menu4" href="#contact" activeLink={activeLink} setActiveLink={setActiveLink} setClick={setClick} click={click} title='Contact'/>
                        <a id='menu5' href="#" onClick={saveFile} className="inline-block text-sm py-2 leading-none mt-4 lg:mt-0 text-teal-300 hover:text-white">Resume</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header