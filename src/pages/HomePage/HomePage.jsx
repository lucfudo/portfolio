import React from "react";
import { ReactComponent as IllustrationHome } from '../../assets/illustrations/illustration-home.svg';
import { BUTTON_CONFIG } from "./buttonConfig";

import './index.scss';

import texts from '../../constants/texts.json';

const CV = 'cv';

const HomePage = () => {
    const paragraphs = texts.presentation.split('\n');

    const handleButtonClick = (link) => {
        window.open(link, '_blank')
    }

    return (
        <div className="homePage">
            <div className="homePageContainer">
                <div className="homePageContent">
                    <h2 dangerouslySetInnerHTML={{ __html: texts.greeting} }/>
                    <h1 dangerouslySetInnerHTML={{ __html: texts.fullName} }/>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph} } />
                    ))}
                </div>
                <div className="buttons">
                    {BUTTON_CONFIG.map((button, index) => {
                        return (
                            <div key={index}>
                                {   
                                button?.id == CV ? 
                                    <button>{button.label}</button>: 
                                    <div key={button.id} onClick={() => handleButtonClick(button.link)}>
                                        {button.icon} 
                                    </div> 
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
            <IllustrationHome />
        </div>
    )
};

export default HomePage;