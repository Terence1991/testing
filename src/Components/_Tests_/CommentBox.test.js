import React from 'react'
import CommentBox from 'Components/CommentBox'
import { mount } from 'enzyme'

let component
 

beforeEach(()=>{
    component = mount(<CommentBox/>)
 })

 afterEach(() => {
   component.unmount()
 })

it('has a  textarea and button', () => {
  expect(component.find('textarea').length)
  expect(component.find('button').length)
})

//forced to rerender component because setState is aysync
it('has a text area', () => {
  component.find('textarea').simulate('change', {
    target: {
      value: 'new comment'
    }
  })
  component.update()
})