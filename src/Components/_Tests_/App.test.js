import React from 'react'
import App from 'Components/App'
import { shallow } from 'enzyme'
import CommentBox from 'Components/CommentBox'
import CommentList from 'Components/CommentList'

let component;

beforeEach(() => {
  component = shallow(<App />)

})

it('shows comment box', () => {
 expect(component.find(CommentBox).length).toEqual(1)
})

it('shows comment list', () => {

  expect(component.find(CommentList).length).toEqual(1)
})