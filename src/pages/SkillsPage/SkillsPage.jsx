import React from "react";
import { useMediaQuery } from '@material-ui/core';
import './index.scss';
import skills from "./skills";
import texts from '../../constants/texts.json';
import { SIZE_MOBILE } from "../../constants/constants";


const SkillsPage = () => {
    const isMobile = useMediaQuery(SIZE_MOBILE);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleSkillClick = (index) => {
        setActiveIndex(index);
      };
    
    return (
        <div className="skillsPage">
            {isMobile ?
            <>
                <div>
                    {
                        Object.keys(skills).map((skillKey, index) => {
                            const skill = skills[skillKey];
                            const isDisplay = index == activeIndex;
                            if(isDisplay){
                                return(
                                    <div key={skillKey} className="content">
                                        <img src={skill.illustration2}/>
                                        <p className="paragraph">{texts[skill.text]}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="slider">
                {
                        Object.keys(skills).map((skillKey, index) => {
                            return(
                                <div key={skillKey} className={`point ${index === activeIndex ? "" : "point_inactive"}`} onClick={() => handleSkillClick(index)}/>
                            )
                        })
                    }
                </div>
            </> 
            : 
            <>
                {Object.keys(skills).map((skillKey) => {
                    const skill = skills[skillKey];
                    return (
                        <div key={skillKey} className="content">
                            <img src={skill.illustration1} />
                            <p className="paragraph">{texts[skill.text]}</p>
                            <div/>
                        </div>
                    );
                })}
            </>
            }
        </div>
    )
};

export default SkillsPage;
