import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import "./TopPanel.css"

function TopPanel() {
    const [click, setClick] = useState(false)
    const handleMoreClick = () => {
        setClick(!click)
    }
    return (
        <Fragment>
            <div className="top-panel">
                <div className="left-side">
                    <Link to="/" >
                        <img src="logo.png" alt="Logo" className="logo" />
                    </Link>

                </div>
                <div className="right-side">
                    <Link to="/" className="home-button">
                        Home
                    </Link>
                    <div className='menu-icon' onClick={handleMoreClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} style={{ fontSize: '20px' }} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TopPanel