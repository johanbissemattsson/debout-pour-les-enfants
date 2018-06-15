import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/page'
import { canUseDOM } from 'exenv';

import 'normalize.css';

import '../../layouts/index.sass';

class PagePreview extends Component {
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
    const { entry, widgetFor } = this.props;
    return (
      <PageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
      />
    );
  }
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PagePreview

