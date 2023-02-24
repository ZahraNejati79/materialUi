import { ADD_POST, REMOVE_POST } from "./postsTypes";

const initialState = {
  posts: [],
};
const postsReducre = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const updatedPost = [...state.posts];
      updatedPost.push(action.payload);
      return { ...state, posts: updatedPost };
    }
    case REMOVE_POST: {
      console.log("add post");
    }
    default:
      return state;
  }
};
export default postsReducre;
