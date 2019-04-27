import App from 'components/App';
import Root from 'Root'
import { mount } from 'enzyme'
import moxios from 'moxios'


beforeEach(() => {
  moxios.install()
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{name:'terry'}, {name: "gordo"}]
  })

})

afterEach(() => {
  moxios.uninstall()

})



it('should fetch a list of  comments', (done) => {

  const component = mount(
    <Root>
      <App/>
    </Root>
  )
  component.find('.fetch-comments').simulate('click')
  component.update()

  moxios.wait(() => {
    expect(component.find('li').length).toEqual(2)
    
    done()
    component.unmount()
  }, 5000)
})