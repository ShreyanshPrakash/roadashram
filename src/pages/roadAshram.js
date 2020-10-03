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


export function RoadAshramComponent() {

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
                            It’s a Car, It’s a Home, It’s a Studio, It’s a School, It is the Road Ashram!
                            Made with love & passion the Road Ashram is a unique vehicle.
                        </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            We travel, live, make films, learn, teach and do a lot more in the
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
