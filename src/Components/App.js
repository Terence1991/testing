import React, {Component} from 'react'
import CommentBox from 'Components/CommentBox'
import CommentList from 'Components/CommentList.js' 
import { Route, Link } from 'react-router-dom'


class App extends Component {
  renderHeader() {
   return(
   <ul>
     <li>
       <Link to='/'>Home</Link>
     </li>
     <li>
       <Link to='/post'> Post a comment</Link>
    </li> 
     <li>
       {this.renderButton}
     </li>
  </ul>
   )
}

  render() {
    return (
      <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  )
  }
}