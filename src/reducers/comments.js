import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'


export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payLoad]
    case FETCH_COMMENTS:
    console.log("This gets <Promise>", action.payLoad)
     const comments = action.payLoad.map((comment) => {
        return comment.name 
      })
      return [...state, ...comments]
      default:
        return state;
  }
}