import React from "react";
import { Link, useLocation  } from "react-router-dom";
import texts from '../../constants/texts.json';
import './index.scss';

const NavButtons = () => {
    const { pathname } = useLocation();
    const [navButtons, setNavButtons] = React.useState([
        {
            id: 0,
            isActive: true,
            text: texts.n_home,
            link: "/portfolio"
        },
        {
            id: 1,
            isActive: false,
            text: texts.n_skills,
            link: "/portfolio/skills"
        },
        {
            id: 2,
            isActive: false,
            text: texts.n_projects,
            link: "/portfolio/projects"
        },
    ]);

    const handleClick = (id) => {
        setNavButtons((prevButtons) =>
            prevButtons.map((button) => ({
                ...button,
                isActive: button.id === id,
            }))
        );
    }

    React.useEffect(() => {
        setNavButtons((prevButtons) =>
          prevButtons.map((button) => ({
            ...button,
            isActive: button.link === pathname
          }))
        );
      }, [pathname]);

    return (
        <div className="navButtons">
            {navButtons.map((button) => {
                return <Link 
                            key={button.id}
                            to={button.link} 
                            onClick={() => handleClick(button.id)} 
                            className={button.isActive ? "active": ""}
                        >
                            {button.text}
                        </Link>
                    }
                )
            }
        </div>
    )
};

export default NavButtons;

