import React from 'react';
import {
    NavLink,
    Link,
} from 'react-router-dom';


import "./style.scss";

import {
    icons,
    navLinks,
} from './config';


export function ContactComponent() {

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
                        Phones are a problem as we are on the move continuously. But if you write to us someone from our team will get back to you soon. 

                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                        Drop a line or many to: 

                    </p>
                    </div>

                    {/* <div className=" body-text font-size-12">
                        <p>
                            As a thank you we promise to share our journey, learnings, joys, sorrows through our short films that we are posting on our Facebook / Instagram / Twitter  / Youtube pages.
                    </p>
                    </div> */}

                    <div className="body-text font-size-12">
                        {/* <p>
                        howcanihelp@roadashram.in 

                    </p> */}
                    <a href="mailto:howcanihelp@roadashram.in">howcanihelp@roadashram.in </a> 

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