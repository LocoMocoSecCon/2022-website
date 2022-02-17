import React, { Component } from "react";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

import "./NavBar.css";

export default class SecondaryNav extends Component {
	static displayName = "SecondaryNav";

	render() {
		return (
			<div className="secondary-nav">
				<div className="swe-container nav-menu">
          <div className='secondary-nav-dates'>June 27-30, 2022</div>
          <div className='secondary-nav-icons'>
            <a href='https://twitter.com/locomocosec'
              target='_blank'
              rel='noopener noreferrer'
              className='secondary-nav-icon'>
              <FaTwitterSquare size={24} color="#232725" />
            </a>
            <a href='https://www.instagram.com/locomocosec/'
              target='_blank'
              rel='noopener noreferrer' 
              className='secondary-nav-icon'>
              <FaInstagramSquare size={24} color="#232725" />
            </a>
          </div>
				</div>
			</div>
		);
	}
}
