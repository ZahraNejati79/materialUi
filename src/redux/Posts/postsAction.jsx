import { ADD_POST, REMOVE_POST } from "./postsTypes";

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
export const removePost = (post) => {
  return {
    type: REMOVE_POST,
    payload: post,
  };
};
