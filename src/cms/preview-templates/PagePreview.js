import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/page'

class PagePreview extends Component { 
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

