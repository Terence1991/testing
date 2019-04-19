import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'


export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payLoad]
    case FETCH_COMMENTS:
    console.log(action.payLoad.data)
     const comments = action.payLoad.data.map((comment) => {
       console.log("this is my api call", action.payLoad.data)
        return comment.name 
      })
      return [...state, ...comments]
      default:
        return state;
  }
}