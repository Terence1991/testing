import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import CommentBox from '../CommentBox'


it('shows comment box', () => {
  const component = shallow(<App />)

  expect(component.find(CommentBox).length).toEqual(1)
})