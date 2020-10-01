import React from 'react';
import {
    NavLink,
} from 'react-router-dom';

import "./style.scss";

import {
    icons,
    navLinks,
} from './config';


export function PeopleComponent() {

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
                            <b>DRIVER, INNOVATOR, HELL RAISER, AHMER</b>

                    </p>
                        <p>
                        Ahmer is an avid reader, status quo questioner and all around Jugaad guy. He works in the non-profit sector helping NGO’s expand their reach



                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>

                            <b>NAVIGATOR, TRIVIA MACHINE, FOODIE, SIDDHARTHA</b>


                    </p>
                        <p>
                            Siddhartha is an unusal adventurer, organiser and a numbers geek.
                            He lives in Mumbai with his family and works in the non-profit sector as a fundraiser


                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            <b>FILM MAKER, ARTIST, CONNECTOR, NEHA</b>


                    </p>
                        <p>
                            Neha is an creative collaborator, community maker maker and a person with magic and works with a transdisciplinary international community


                    </p>
                    </div>

                    {/* <div className="body-text font-size-12">
                        <p>
                        All three of us are undertaking this journey to raise funds for people affected by the pandemic, so 
                        <a href="#"> please donate</a>
                    </p>
                    </div> */}

                    

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


            </div>
        </React.Fragment>
    )
}