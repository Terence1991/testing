import React, {Component} from 'react'
import CommentBox from 'Components/CommentBox'
import CommentList from 'Components/CommentList.js' 
import { Route, Link } from 'react-router-dom'
import connect from 'react-rotuer'
import auth from '../reducers/auth';


class App extends Component {

  renderButton() {
    if(this.props.auth) {
     return(
     <button>
        sign out 
      </button>
     )
    }  else {
      return (
        <button>
          sign in
        </button>
      )
    }
  }


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
        {this.renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  )
  }
}

function mapStateToProps(state) {
  return { 
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)