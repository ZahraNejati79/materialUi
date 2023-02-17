import { ADD_POST, REMOVE_POST } from "./postsTypes";

const initialState = {
  posts: [],
};
const postsReducre = (state = initialState, action) => {
  switch (state.action) {
    case ADD_POST: {
      console.log("add post");
    }
    case REMOVE_POST: {
      console.log("add post");
    }
    default:
      return state;
  }
};
export default postsReducre;
