import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { canUseDOM } from 'exenv';

import 'normalize.css';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import './index.sass';

class TemplateWrapper extends Component {
  componentWillMount() {
    if (canUseDOM) {
      const WebFont = require('webfontloader');
      WebFont.load({
        google: {
          families: ['Open Sans', 'Open Sans Condensed:300,700']
        }
      });
    }
  }
    
  render() {
    const { children } = this.props;
    return (
      <div className='site-container'>
        <Helmet title='Debout pour les Enfants' />
        <Nav />
        {children()}
        <Footer />
      </div>
    );
  }
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
