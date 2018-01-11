import React from 'react'
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
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => { onPress(link) }}
    >
      <Text>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  )
}

export default BlogPost
