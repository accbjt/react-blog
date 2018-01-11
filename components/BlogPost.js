import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const onPress = link => {
  Actions.blogWebView({ link })
}

const BlogPost = ({
  title,
  description,
  link,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => { onPress(link) }}
  >
    <Text>{title}</Text>
    <Text>{description}</Text>
  </TouchableOpacity>
)

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default BlogPost
