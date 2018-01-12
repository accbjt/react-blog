import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import BlogPost from '../BlogPost'
import Search from '../Search'

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

    this.state = { blogPosts: [], filteredPosts: [] }
    this.onMount = this.onMount
    this.filterPosts = this.filterPosts.bind(this)
  }

  async componentDidMount () {
    const fetchResponse = await fetch('https://dl.dropboxusercontent.com/s/cpl8uh9mloelmz2/invision-blog.json?dl=0')
    const response = await fetchResponse.json()

    this.onMount(() => {
      const items = response.rss.channel.item

      this.setState({
        blogPosts: items,
        filteredPosts: items,
      })
    })
  }

  onMount (callback) {
    callback()
  }

  filterPosts (text) {
    const filteredPosts = this.state.blogPosts.filter(post => (
      post.title.toLowerCase().includes(text.toLowerCase())
    ))

    this.setState({ filteredPosts })
  }

  resetPosts () {
    this.setState({ filteredPosts: this.state.blogPosts })
  }

  render () {
    return (
      <View style={styles.content}>
        <Search
          numberOfLines={4}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          filterPosts={this.filterPosts}
        />

        <FlatList
          data={this.state.filteredPosts}
          renderItem={({ item }) => (
            <BlogPost {...item} />
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}
