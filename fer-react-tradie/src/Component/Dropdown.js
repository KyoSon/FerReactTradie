import React, { useState } from 'react'
import { BrowserRouterasRouter } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa'

function Dropdown({ selected, setSelected, setNeedSave }) {
    const [isActive, setIsActive] = useState(false);
    const options = ['scheduled', 'active', 'invoicing', 'to priced', 'completed'];

    const handleClick = (option) => {
        if (option !== selected) {
            setSelected(option);
            setNeedSave(false);
        } else {
            setNeedSave(true);
        }
        setIsActive(false);
    }

    return (
        <div className='dropdown'>
            <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <FaCaretDown></FaCaretDown>
            </div>
            {isActive &&
                (
                    <div className='dropdown-content'>
                        {options.map((option, index) => (
                            <div key={index} className='dropdown-item' onClick={(e) => {
                                handleClick(option)
                            }}>
                                {option}
                            </div>
                        ))}
                    </div>
                )
            }
        </div >
    )
}

export default Dropdown