import React from 'react'
import CommentBox from 'Components/CommentBox'
import CommentList from 'Components/CommentList.js' 
import { Route } from 'react-router-dom'


export default () => {
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  )
}