import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import BlogPost from '../BlogPost'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff3465',
  },
})

export default class BlogPosts extends React.Component {
  constructor () {
    super()

    this.state = { blogPosts: [] }
    this.onMount = this.onMount
  }

  async componentDidMount () {
    const fetchResponse = await fetch('https://dl.dropboxusercontent.com/s/cpl8uh9mloelmz2/invision-blog.json?dl=0')
    const response = await fetchResponse.json()

    this.onMount(() => {
      this.setState({
        blogPosts: response.rss.channel.item,
      })
    })
  }

  onMount (callback) {
    callback()
  }

  render () {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.blogPosts}
          renderItem={({ item }) => (
            <BlogPost {...item} />
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}
