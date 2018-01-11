import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import BlogPost from './BlogPost'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class BlogPosts extends React.Component {
  constructor () {
    super()

    this.state = { blogPosts: [] }
  }

  async componentDidMount () {
    const fetchResponse = await fetch('https://dl.dropboxusercontent.com/s/cpl8uh9mloelmz2/invision-blog.json?dl=0')
    const response = await fetchResponse.json()

    this.setState({
      blogPosts: response.rss.channel.item,
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.blogPosts}
          renderItem={({item}) => (
            <BlogPost {...item} />
          )}
          // selected={
          //   // Can be any prop that doesn't collide with existing props
          //   this.state.selected // A change to selected should re-render FlatList
          // }
        />
      </View>
    )
  }
}
