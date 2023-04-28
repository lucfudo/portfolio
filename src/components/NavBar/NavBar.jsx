import React from "react";
import { RiCloseFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useMediaQuery } from '@material-ui/core';
import './index.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import NavButtons from "../NavButtons/NavButtons";
import { SIZE_MOBILE } from "../../constants/constants";

const COLOR = "#fff";

const NavBar = () => {
    const isMobile = useMediaQuery(SIZE_MOBILE);

    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navBar">
            <Logo fill={COLOR} className="logo"/>
            {isMobile ? (
                menuOpen ? (
                    <RiCloseFill color={COLOR} size="2rem" onClick={handleMenuClick} />
                ) : (
                    <RxHamburgerMenu color={COLOR} size="2rem" onClick={handleMenuClick} />
                )
            ) : (
                <NavButtons className="navButtons"/>
            )}
            {isMobile && menuOpen && <NavButtons className="navButtons"/>}
        </div>
    )
};

export default NavBar;

