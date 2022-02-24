import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import NavMenu from './NavMenu';
import HamburgerMenu from './HamburgerMenu';
import SecondaryNav from './SecondaryNav';

import './NavBar.css';

export default class NavBar extends Component {
	static displayName = "NavBar";

  static propTypes = {
    logo: PropTypes.string,
    logoHref: PropTypes.string,
    links: PropTypes.array.isRequired
  }

	render() {
		return (
      <>
        <NavMenu {...this.props} />
        <HamburgerMenu {...this.props} />
        <SecondaryNav/>
      </>
		);
	}
}