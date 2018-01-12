import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { text: 'Search' }
  }

  onTextChange (text) {
    this.setState({ text })
    this.props.filterPosts(text)
  }

  onTextFocus () {
    if (this.state.text === 'Search') {
      this.setState({ text: '' })
    }
  }

  onTextBlur () {
    if (!this.state.text) {
      this.setState({ text: 'Search' })
    }
  }

  render () {
    return (
      <TextInput
        style={{
          height: 40,
          backgroundColor: 'white',
          borderColor: 'gray',
          borderWidth: 1,
          width: '100%',
          padding: 10,
          textAlign: 'center',
        }}
        onChangeText={(text) => { this.onTextChange(text) }}
        onFocus={() => { this.onTextFocus() }}
        onBlur={() => { this.onTextBlur() }}
        value={this.state.text}
      />
    )
  }
}

Search.propTypes = {
  filterPosts: PropTypes.func.isRequired,
}
