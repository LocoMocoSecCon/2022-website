import React, { useState } from 'react';

function HamburgerMenu({ logo, logoHref, links }) {


    const [state, setState] = useState({
        menuClosed: true,
    })

    function toggleMenu(value) {
        setState({ ...state, menuClosed: !state.menuClosed })
    }

    const MenuIcon = () => {
        return (
            <svg onClick={() => { toggleMenu() }}
                fill='#fff' viewBox="0 0 100 100" width="40" height="100%">
                <rect y="calc(50% - 40px)" width="100" height="10px"></rect>
                <rect y="calc(50% - 10px)" width="100" height="10px"></rect>
                <rect y="calc(50% + 20px)" width="100" height="10px"></rect>
            </svg>
        )
    }

    const CloseIcon = () => {
        return (
            <svg onClick={() => { toggleMenu() }}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                overflow="visible"
                stroke="#fff"
                stroke-width="4"
                stroke-linecap="round">
                <line y="10" x2="30" y2="30" />
                <line y="10" x1="30" y2="30" />
            </svg>
        )
    }



    const ClosedBar = () => {

        return (
            <div className='swe-hamburger-menu-bar-wrap'>
                <div className='swe-container'  style={{ display: "flex", height:'100%' }}>
                        <div className='swe-hamburger-menu-logo-container'>
                            <a href={logoHref || '/#'}>
                                {
                                    logo ?
                                        <img src={logo} alt="tbc" />
                                        : <></>
                                }
                            </a>
                        </div>
                        <div className='swe-hamburger-menu-icon-container'>
                            <MenuIcon />
                        </div>
                    </div>
                </div>

        )

    }

    const MenuBody = () => {
        return (
            <div className='swe-hamburger-menu-body'>
                <div className='swe-hamburger-menu-body-content'>
                    <div className='swe-container'>
                        <div style={{ padding: "15px", display: 'flex' }}>

                            <div className='swe-hamburger-menu-logo-container'>
                                <a href={logoHref || '/#'}>
                                    {
                                        logo ?
                                            <img src={logo} alt="tbc" />
                                            : <></>
                                    }
                                </a>
                            </div>
                            <div className='swe-hamburger-menu-icon-container'>
                                <CloseIcon />
                            </div>
                        </div>

                    </div>
                    <div className='container'>
                        <div className='swe-hamburger-menu-links'>
                            {links.map((link, i) => {
                                return (<div
                                    id={link.id}
                                    key={`swe-hamburger-menu-link-${i}`}
                                    className={link.background ? `swe-hamburger-menu-link-box-white${link.class ? ` ${link.class}`: ''}` : `swe-hamburger-menu-link-box${link.class ? ` ${link.class}`: ''}`}>
                                    <a href={link.href} target={link.target} >  {link.label}</a>
                                </div>)
                            })}

                        </div>

                    </div>
                </div>

            </div>
        )
    }


    return state.menuClosed ? <ClosedBar /> : <MenuBody />






}

export default HamburgerMenu;