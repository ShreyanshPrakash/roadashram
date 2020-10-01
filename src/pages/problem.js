import React from 'react';
import {
    NavLink, Link,
} from 'react-router-dom';

import "./style.scss";

import {
    icons,
    navLinks,
} from './config';


export function ProblemComponent() {

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
                        As the Covid-19 pandemic ravages our world, India is one of the worst affected countries. The lockdown and other restrictions necessitated by the pandemic has affected the livelihoods of millions of people. 
                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                        We are facing a humanitarian crisis. A crisis which will push people back into 
                        <a href="#"> poverty,</a>
                        <a href="#"> trigger malnutrition,</a>
                        <a href="#"> hunger and affect children severely,</a>
                    </p>
                    </div>

                    <div className=" body-text font-size-12">
                        <p>
                        We need to address these challenges right now. You can help by making a 
                        <a href="#"> generous donation right away.</a>
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
            <div className="donate-now">
                DONATE NOW
                </div>
        </React.Fragment>
    )
}