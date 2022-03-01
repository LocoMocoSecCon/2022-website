import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PalmButton.css';

class PalmButton extends Component {
  static displayName = 'PalmButton';
  static propTypes = {
    wording: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    class: PropTypes.string,
    anchor: PropTypes.bool
  }

  render() {
    return (
      <>
        {this.props.anchor &&

      <a className="tropical-btn-anchor"
        id={this.props.class} 
        href={this.props.link} 
        target="_blank" rel="noopener noreferrer">
      {/* Inspired by Suzanne Aitchison */}
      {/* https://codepen.io/aitchiss/pen/yLOORpZ */}
        <div className="tropical-btn">
          <div className="box-canvas">
            <div className="tree">
              <div className="cutout"></div>
            </div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="reg-text">{this.props.wording}</div>
          </div>     
        </div>
      </a>
        }
        {!this.props.anchor &&

      <div className="tropical-btn-anchor"
        id={this.props.class} 
        // href={this.props.link} 
        target="_blank" rel="noopener noreferrer">
      {/* Inspired by Suzanne Aitchison */}
      {/* https://codepen.io/aitchiss/pen/yLOORpZ */}
        <div className="tropical-btn">
          <div className="box-canvas">
            <div className="tree">
              <div className="cutout"></div>
            </div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="leaf"></div>
            <div className="reg-text">{this.props.wording}</div>
          </div>     
        </div>
      </div>
        }

      </>
    )
  }
}

export default PalmButton;