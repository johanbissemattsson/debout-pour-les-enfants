import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { canUseDOM } from 'exenv';

import 'normalize.css';

import Navbar from '../components/Navbar';

import './index.sass';

class TemplateWrapper extends Component {
  componentWillMount() {
    if (canUseDOM) {
      const WebFont = require('webfontloader');
      WebFont.load({
        google: {
          families: ['Open Sans']
        }
      });
    }
  }
    
  render() {
    const { children } = this.props;
    return (
      <div className='site-container'>
        <Helmet title='Debout pour les Enfants' />
        <Navbar />
        {children()}
      </div>
    );
  }
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
