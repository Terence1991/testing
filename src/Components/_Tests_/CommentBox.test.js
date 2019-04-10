import React from 'react'
import CommentBox from 'Components/CommentBox'
import { mount } from 'enzyme'
import Root from 'root'

let component
 


beforeEach(()=>{
    component = mount(
    <Root>
      <CommentBox/>
    </Root> 
  )
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
describe("the text area", () => {
  beforeEach(()=> {
    component.find('textarea').simulate('change', {
      target: {
        value: 'new comment'
      }
    })
    component.update()
  })
  
  it('has a text area', () => {
    expect(component.find('textarea').prop('value')).toEqual('new comment')
  })

  it('text area is empty when new comment is entered', () => {
    expect(component.find('textarea').prop('value')).toEqual('new comment')
    component.find('form').simulate('submit');
    component.update()
    expect(component.find('textarea').prop('value')).toEqual('')
  })

})