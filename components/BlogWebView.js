import React from 'react'
import PropTypes from 'prop-types'
import { WebView } from 'react-native'

const BlogWebView = ({ link }) => (
  <WebView
    source={{ uri: link }}
    style={{ marginTop: 20 }}
  />
)


BlogWebView.propTypes = {
  link: PropTypes.string.isRequired,
}

export default BlogWebView
