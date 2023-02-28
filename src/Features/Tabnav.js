import React from 'react'

const Tabnav = ({ id, title, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <button onClick={handleClick} className=
            { activeTab === id 
                ? "hover:text-teal-300 text-teal-300 border-l-2 whitespace-nowrap items-center w-full active flex text-left tab-link border-solid border-current" : 
                "hover:text-teal-300 border-current border-l-2 whitespace-nowrap items-center w-full tab-link flex text-left"
            }>
            {title}
        </button>
    )
}

export default Tabnav