import React from 'react'
import { WebView } from 'react-native'

const BlogWebView = ({ link }) => {
  return (
    <WebView
      source={{ uri: link }}
      style={{ marginTop: 20 }}
    />
  )
}

export default BlogWebView
