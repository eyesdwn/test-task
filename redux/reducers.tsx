import { combineReducers } from "redux";
import { ActionType } from "./actions";
import { PostsType } from "../interfaces/index";

const postsReducer = (state = [], action: any): Array<PostsType> => {
  switch (action.type) {
    case ActionType.GET_POSTS_SUCCESS:
      return action.payload.posts;

    case ActionType.ADD_POST_SUCCESS:
      return [action.payload.post, ...state];

    default:
      return state;
  }
};

const currentPostReducer = (state = null, action: any) => {
  switch (action.type) {
    case ActionType.GET_SINGLE_POST_SUCCESS:
      return action.payload.post;
    default:
      return state;
  }
};

const initialState = {
  posts: [] as Array<PostsType>,
};
const deletePostReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.DELETE_POST_SUCCESS:
      return state.posts.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

const errorReducer = (state = null, action: any) => {
  switch (action.type) {
    case ActionType.GET_POSTS_START:
    case ActionType.ADD_POST_START:
    case ActionType.GET_SINGLE_POST_START:
      return null;

    case ActionType.GET_POSTS_ERROR:
    case ActionType.ADD_POST_ERROR:
    case ActionType.GET_SINGLE_POST_ERROR:
      return action.payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
  currentPost: currentPostReducer,
  error: errorReducer,
  deletePost: deletePostReducer,
});
