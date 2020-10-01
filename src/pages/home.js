import React from 'react';
import {
    NavLink,
} from 'react-router-dom';

import "./style.scss";

import {
    icons,
    navLinks,
} from './config';


export function HomeComponent() {

    return (
        <React.Fragment>
            <div className="home wrapper">


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
                            We are driving along India’s borders to raise awareness and money to help people facing difficulties because of the pandemic.
                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            You can help us by donating generously. All money raised goes to non-profits that are already providing relief to affected people across the country.
                    </p>
                    </div>

                    <div className=" body-text font-size-12">
                        <p>
                            As a thank you we promise to share our journey, learnings, joys, sorrows through our short films that we are posting on our Facebook / Instagram / Twitter  / Youtube pages.
                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            Join us for this fun, tiring and long journey!
                    </p>
                    </div>
                </div>

                <div className="icons">
                    {
                        icons.map((icon, index) => {
                            return (
                                <React.Fragment>
                                    <span className="icon-item">
                                        <a href={icon.link} target="_blank">
                                            <img src={icon.src} alt={icon.title} className={icon.class} />
                                        </a>
                                    </span>
                                </React.Fragment>
                            )
                        })
                    }
                </div>

                <div className="donate-now">
                    DONATE NOW
                </div>


            </div>
        </React.Fragment>
    )
}