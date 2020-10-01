import React from 'react';
import {
    NavLink,
} from 'react-router-dom';

import "./style.scss";

import {
    icons,
    navLinks,
} from './config';


export function JourneyComponent() {

    return (
        <React.Fragment>
            <div className="journey wrapper">


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
                            22000 Kilometers, 54 days, 30 states, 3 people and the Road Ashram.
                            We plan to travel along all of India’s borders (closest motorable, permissible road).


                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            Starting at Delhi, we reach Gangotri, to travel along India’s international borders, touching Nepal, Bhutan, China, Burma, Bangladesh, Bay of Bengal, down the Eastern coastline to Kanyakumari then up the Western coast to Mumbai, then to the Pakistan border along Gujarat and Rajasthan, through Punjab to Kashmir and Leh then in the final leg we cross Chandigarh to make our way back to Gangotri and end in Delhi.


                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            Along the way, we learn and share our learnings about the country, it’s foods, cultures, people and places, while we try to find the unity in the many diversities that make India, India.


                    </p>
                    </div>

                    <div className="body-text font-size-12">
                        <p>
                            Follow us on social media to keep in touch! And don’t forget to donate!
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


            </div>
        </React.Fragment>
    )
}