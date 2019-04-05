import React from 'react'
import App from 'Components/App'
import { shallow } from 'enzyme'
import CommentBox from 'Components/CommentBox'
import CommentList from 'Components/CommentList'


it('shows comment box', () => {
  const component = shallow(<App />)

  expect(component.find(CommentBox).length).toEqual(1)
})

it('shows comment list', () => {
  const componet = shallow(<App />)

  expect(componet.find(CommentList).length).toEqual(1)
})