import React from "react";
import './index.scss';
import texts from '../../constants/texts.json';
import { Link } from "react-router-dom";

const NavButtons = () => {
    const [navButtons, setNavButtons] = React.useState([
        {
            isActive: false,
            text: texts.n_home,
            link: "/portfolio"
        },
        {
            isActive: false,
            text: texts.n_skills,
            link: "/portfolio/skills"
        },
        {
            isActive: false,
            text: texts.n_projects,
            link: "/portfolio/projects"
        },
    ]);

    React.useEffect(() => {
        const currentPath = window.location.pathname;
        setNavButtons((prevButtons) =>
          prevButtons.map((button) => ({
            ...button,
            isActive: button.link === currentPath
          }))
        );
      }, []);

    const handleClick = (index) => {
        const newButtons = [...navButtons];
        for (let i = 0; i < newButtons.length; i++) {
          newButtons[i].isActive = i === index;
        }
        setNavButtons(newButtons);
    }
    return (
        <div className="navButtons">
            {navButtons.map((button, index) => {
                return <Link to={button.link} onClick={() => handleClick(index)} className={button.isActive ? "active": ""}>{button.text}</Link>
            })}
        </div>
    )
};

export default NavButtons;

