import React from 'react';
import {
    NavLink, Link,
    useHistory,
} from 'react-router-dom';

import "./style.scss";

import arrow from './../assets/images/arrow.png';
import videoIcon from './../assets/images/Youtube.png';

import {
    icons,
    navLinks,
} from './config';


export function YoutubeComponent() {

    const history = useHistory();

    const handleDonateClick = () => {
        // history.push("/donate");
        window.open(
            "https://www.facebook.com/donate/364307428084760/"
        )
    }

    return (
        <React.Fragment>
            <div className="journey wrapper">


                <div className="navBar">
                    {
                        navLinks.map((nav, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <NavLink to={nav.link} className="font-size-8">
                                        {nav.text}
                                    </NavLink>
                                </React.Fragment>
                            )
                        })
                    }
                </div>


                <div className="content-container youtube-container">

                    <div className="arrow-left arrow flex-item">
                        <img src={arrow}/>
                    </div>

                    <div className="youtube flex-item">
                        {/* <img src={videoIcon}/> */}
                        <iframe 
                            // width="560" 
                            // height="315" 
                            // src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" 
                            src="https://www.youtube.com/embed/5wwKlfMPoYg"
                            frameborder="0" 
                            allow="autoplay; encrypted-media" 
                            allowfullscreen
                        ></iframe>
                    </div>

                    <div className="arrow-right arrow flex-item">
                        <img src={arrow}/>
                    </div>
                    
                </div>

                <div className="icons">
                    {
                        icons.map((icon, index) => {
                            return (
                                <React.Fragment>
                                    <span className="icon-item">

                                        {
                                            icon.internal
                                                ?
                                                <Link to={icon.link}>
                                                    <img src={icon.src} alt={icon.title} className={icon.class} />
                                                </Link>
                                                :
                                                <a href={icon.link} target="_blank">
                                                    <img src={icon.src} alt={icon.title} className={icon.class} />
                                                </a>
                                        }
                                    </span>
                                </React.Fragment>
                            )
                        })
                    }
                </div>


            </div>
            <div className="donate-now" onClick={handleDonateClick}>
                DONATE NOW
                </div>
        </React.Fragment>
    )
}