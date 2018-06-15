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
    const { children, location } = this.props;
    const pathArray = location.pathname.split( '/' );
    const language = (pathArray[1] != '') ? pathArray[1] : 'sv';
    const childProperties = { language: language };

    return (
      <div className='site-container'>
        <Helmet title='Debout pour les Enfants' />
        <Nav language={language} />
        {children({ ...this.props, ...childProperties })}
        <Footer language={language} />
      </div>
    );
  }
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
