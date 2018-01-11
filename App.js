import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { BlogPosts, BlogWebView } from './components'

export default () => (
  <Router>
    <Scene key='root'>
      <Scene
        key='blogPosts'
        component={BlogPosts}
        title='Invision Blog Posts'
        initial
      />
      <Scene
        key='blogWebView'
        component={BlogWebView}
        title='Invision Post'
      />
    </Scene>
  </Router>
)
