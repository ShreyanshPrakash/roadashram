import React from 'react';
import {
    NavLink, Link, useHistory,
} from 'react-router-dom';

import "./style.scss";

import {
    icons,
    navLinks,
} from './config';


export function DonateComponent() {


    const history = useHistory();

    const handleDonateClick = () => {
        history.push("/donate");
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
                        The effect of lockdowns because of the pandemic means that people have lost jobs, businesses have been shut and a large number of people are staring at hunger. 
                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                        We appeal to you to make a donation to help provide food kits to people in need.

                    </p>
                    </div>

                    <div className=" body-text font-size-12">
                        <p>
                        All funds raised from the campaign go straight to Give India and will enable the provision of food kits for the worst affected communities across the country. 

                    </p>
                    </div>

                    <div className=" body-text font-size-12">
                        <p>
                        All funds raised from the campaign go straight to NGOs. The trip organisers, driver & passengers in the car do not receive any benefit from your donation

                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                        Please donate generously. Together is the only way we can overcome this crisis. 


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