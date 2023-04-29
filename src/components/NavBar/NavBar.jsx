import React from "react";
import { RiCloseFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useMediaQuery } from '@material-ui/core';
import NavButtons from "../NavButtons/NavButtons";
import { SIZE_MOBILE, SIZE_ICON, COLOR_LOGO, COLOR_LOGO_ICON_MENU } from "../../constants/constants";
import LOGO from "../../assets/logo.png";
import './index.scss';

const NavBar = () => {
    const isMobile = useMediaQuery(SIZE_MOBILE);
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navBar">
            <img src={LOGO} className="logo"/>
            {isMobile ? (
                menuOpen ? (
                    <RiCloseFill aria-label={'Close menu'} color={COLOR_LOGO_ICON_MENU} size={SIZE_ICON} onClick={handleMenuClick} />
                ) : (
                    <RxHamburgerMenu aria-label={'Open menu'} color={COLOR_LOGO_ICON_MENU} size={SIZE_ICON} onClick={handleMenuClick} />
                )
            ) : (
                <NavButtons className="navButtons"/>
            )}
            {isMobile && menuOpen && <NavButtons className="navButtons"/>}
        </nav>
    )
};

export default NavBar;

