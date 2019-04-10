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
  expect(component.find('textarea').length).toEqual(1)
  expect(component.find('button').length).toEqual(1)
})

//forced to rerender component because setState is aysync. 
//Assertion textarea recives value prop
it('has a text area', () => {
  component.find('textarea').simulate('change', {
    target: {
      value: 'new comment'
    }
  })
  component.update()

  expect(component.find('textarea').prop('value')).toEqual('new comment')
})

it('text area is empty when new comment is entered', () => {
  component.find('textarea').simulate('change', {
    target: {
      value: "new comment"
    }
  })
  component.update()
  component.find('form').simulate('submit');
  component.update()
  expect(component.find('textarea').prop('value')).toEqual('')
})

