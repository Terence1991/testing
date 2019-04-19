import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types'


export function saveComment(comment) {
  return {
    type: SAVE_COMMENT, 
    payLoad: comment
  }
}


export function fetchComments() {
  const comments = axios.get('https://jsonplaceholder.typicode.com/comments')

  return {
    type: FETCH_COMMENTS,
    payLoad: comments
  }
}