import React, { Component } from "react";
import logo from "../../static/logos/loco-moco-horizontal.png";

import NavBar from 'responsive-react-js-navbar';
import "./NavBar.css";

export default class NavBar2 extends Component {
	static displayName = "NavBar";

	render() {
    const links = [{
      "href": "/",
      "label": "Home",
      "background": false,
    },
    {
        "href": "https://www.eventbrite.com/e/loco-moco-product-security-conference-tickets-268236260877",
        "label": "Register",
        "background": false,
    },
    {
        "href": "/venue",
        "label": "Venue",
        "background": false,
    },
    {
        "href": "https://hawaiicovid19.com/travel/",
        "label": "Safety",
        "background": false,
    }]
    
		return (
      <>
        <NavBar
          logo={logo}
          logoHref='/'
          links={links}
        />
      </>


			// <div className="navbar">
			// 	<div className="container">
			// 		<a href="/">
			// 			<img
			// 				src={logo}
			// 				className="navbar-logo"
			// 				height="25"
			// 				alt="locomocosec logo"
			// 			/>
			// 			<p className="nav-dates">Jun 27 - Jun 30, 2022</p>
			// 		</a>
			// 	</div>
			// </div>
		);
	}
}
