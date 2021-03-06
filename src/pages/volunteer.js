import React from 'react';
import {
    NavLink, Link,
    useHistory,
} from 'react-router-dom';

import "./style.scss";

import {
    icons,
    navLinks,
} from './config';


export function VolunteerComponent() {

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


                <div className="content-container">
                    <div className="body-text font-size-12">
                        <p>
                        We need help. Lots of it. Take a look at the list. 


                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            Be a social media ninja. Help us spread the message amongst your friends and family.

                    </p>
                    </div>

                    <div className=" body-text font-size-12">
                        <p>
                        Organise an event in your city, invite your friends, family, a local NGO, the media and whoever else. We are happy to spend a few hours with you and talk about what we learnt. Offer food, shelter, petrol or cover our costs. 


                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            Work for a corporate? Petition your company to donate. Use this template.

                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            Friends with a celeb ? Ask them to help spread the message.

                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            {/* Got ideas ?
                            <a href="#">Talk to us.</a> */}
                            Got ideas ? Talk to us.


                        </p>
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