import React from 'react';
import {
    NavLink,
} from 'react-router-dom';

import "./style.scss";

import {
    icons,
    navLinks,
} from './config';


export function VolunteerComponent() {

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
                        <b>W</b>e need help. Lots of it. Take a look at the list. 


                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            Be a social media ninja. Help us spread the message amongst your friends and family.

                    </p>
                    </div>

                    <div className=" body-text font-size-12">
                        <p>
                        Organise an event in your city, invite your friends, family, a local NGO, the media and whoever else. <b>W</b>e are happy to spend a few hours with you and talk about what we learnt. Offer food, shelter, petrol or cover our costs. 


                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            <b>W</b>ork for a corporate? Petition your company to donate. Use this template.

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
                                        <img src={icon.src} alt={icon.title} className={icon.class} />
                                    </span>
                                </React.Fragment>
                            )
                        })
                    }
                </div>


            </div>
        </React.Fragment>
    )
}