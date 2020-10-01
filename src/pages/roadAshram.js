import React from 'react';
import {
    NavLink,
} from 'react-router-dom';

import "./style.scss";

import {
    icons,
    navLinks,
} from './config';


export function RoadAshramComponent() {


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
                            It’s a Car, It’s a Home, It’s a Studio, It’s a School, It is the Road Ashram!
                            Made with love & passion the Road Ashram is a unique vehicle.
                        </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            <b>W</b>e travel, live, make films, learn, teach and do a lot more in the
                            Road Ashram!


                        </p>
                    </div>

                    <div className=" body-text font-size-12">
                        <p>

                            The Road Ashram was made to raise awareness and money for Covid relief. So before you get lost admiring the Road Ashram, make a donation now!


                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            Check our social media handles for video and pictures from the trip


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
