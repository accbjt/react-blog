import 'react-native'
import React from 'react'
import { BlogPost } from '../BlogPost'

import renderer from 'react-test-renderer'

it ('renders correctly', () => {
  const tree = renderer.create(<BlogPost />).toJSON()

  expect(tree).toMatchSnapshot()
})
