import React from 'react'
import CommentBox from 'Components/CommentBox'
import { mount } from 'enzyme'

let component

it('has a  textarea and button', () => {
  const component = mount(<CommentBox/>)
  expect(component.find('textarea').length)
  expect(component.find('button').length)
})