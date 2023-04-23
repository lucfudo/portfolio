import React from "react";
import { useMediaQuery } from '@material-ui/core';
import './index.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import NavButtons from "../NavButtons/NavButtons";


const COLOR = "#fff";

const NavBar = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return <div className="navBar">
        <Logo fill={COLOR}/>
        {isMobile ? <RxHamburgerMenu color={COLOR}/> : <NavButtons />}
    </div>
};

export default NavBar;

