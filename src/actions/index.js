import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS, ERROR} from 'actions/types'


export function saveComment(comment) {
  return {
    type: SAVE_COMMENT, 
    payLoad: comment
  }
}


export async function fetchComments() {
	try {
      const response = await  axios.get('https://jsonplaceholder.typicode.com/comments')
      console.log("this is my response", response)
		  const comments = response.data;
		  return {
			type: FETCH_COMMENTS,
			payLoad: comments
		  }
	} catch (err) {
		return {
			type: ERROR,
			payload: err
		}
	}
}