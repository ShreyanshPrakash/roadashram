import React from 'react';
import {
    NavLink, Link,
    useHistory,
} from 'react-router-dom';

import "./style.scss";
import image from "./../assets/images/Map.png";

import {
    icons,
    navLinks,
} from './config';


export function LocationComponent() {

    const history = useHistory();

    const handleDonateClick = () => {
        // history.push("/donate");
        window.open(
            "https://www.facebook.com/donate/364307428084760/"
        )
    }


    return (
        <React.Fragment>
            <div className="wrapper">


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


                <div className="content-container map-container">
                    <img src={image}/>
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