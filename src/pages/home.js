import React from 'react';
import {
    NavLink,
} from 'react-router-dom';

import "./style.scss";


export function HomeComponent() {



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
                            <b>W</b>e are driving along India’s borders to raise awareness and money to help people facing difficulties because of the pandemic.
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
                        icons.map((icon,index) => {
                            return (
                                <React.Fragment>
                                    <span className="icon-item">
                                        <img src={icon.src} alt={icon.title} className={icon.class}/>
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


const navLinks = [
    {
        text: "Why",
        link: ""
    },
    {
        text: "Donate",
        link: ""
    },
    {
        text: "Road Ashram",
        link: ""
    },
    {
        text: "People",
        link: ""
    },
    {
        text: "Volunteer",
        link: ""
    },
    {
        text: "Contact",
        link: ""
    }

];


const icons = [
    {
        src: "./assets/images/fb.png",
        link: "#",
        title: "Facebook link",
        class: "fb",
    },
    {
        src: "./assets/images/twitter.png",
        link: "#",
        title: "Twitter link",
    },
    {
        src: "./assets/images/Insta.png",
        link: "#",
        title: "Instagram link",
    },
    // {
    //     src: "./assets/images/Youtube.png",
    //     link: "#",
    //     title: "Youtube link",
    // },
    {
        src: "./assets/images/whatsapp.png",
        link: "#",
        title: "Whatsapp link",
    },
    {
        src: "./assets/images/heart.png",
        link: "#",
        title: "Heart link",
    },
    {
        src: "./assets/images/location.png",
        link: "#",
        title: "Location link",
        class: "location",
    },
]