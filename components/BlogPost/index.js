import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#3e4042',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    color: '#3e4042',
    fontSize: 16,
  },
})

const onPress = (link, title) => {
  Actions.blogWebView({ link, title })
}

const BlogPost = ({
  title,
  description,
  link,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => { onPress(link, title) }}
  >
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </TouchableOpacity>
)

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default BlogPost
