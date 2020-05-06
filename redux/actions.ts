import { PostsType, Error, AddPost } from "../interfaces/index";

export const ActionType = {
  GET_POSTS_START: "GET_POSTS_START",
  GET_POSTS_SUCCESS: "GET_POSTS_SUCCESS",
  GET_POSTS_ERROR: "GET_POSTS_ERROR",

  GET_SINGLE_POST_START: "GET_SINGLE_POST_START",
  GET_SINGLE_POST_SUCCESS: "GET_SINGLE_POST_SUCCESS",
  GET_SINGLE_POST_ERROR: "GET_SINGLE_POST_ERROR",

  ADD_POST_START: "ADD_POST_START",
  ADD_POST_SUCCESS: "ADD_POST_SUCCESS",
  ADD_POST_ERROR: "ADD_POST_ERROR",

  DELETE_POST_START: "DELETE_POST_START",
  DELETE_POST_SUCCESS: "DELETE_POST_SUCCESS",
  DELETE_POST_ERROR: "DELETE_POST_ERROR",
};
export type PostsActionsTypes =
  | getPostsStart
  | getPostsSuccess
  | getPostsError
  | getSinglePostStart
  | getSinglePostSuccess
  | getSinglePostError
  | addPostStart
  | addPostSuccess
  | addPostError
  | deletePostStart
  | deletePostSuccess
  | deletePostError;

type getPostsStart = {
  type: typeof ActionType.GET_POSTS_START;
};
export const getPostsStart = (): getPostsStart => ({
  type: ActionType.GET_POSTS_START,
});

type getPostsSuccess = {
  type: typeof ActionType.GET_POSTS_SUCCESS;
  payload: { posts: Array<PostsType> };
};
export const getPostsSuccess = (posts: Array<PostsType>): getPostsSuccess => ({
  type: ActionType.GET_POSTS_SUCCESS,
  payload: {
    posts,
  },
});

type getPostsError = {
  type: typeof ActionType.GET_POSTS_ERROR;
  payload: { error: Error };
};
export const getPostsError = (error: Error): getPostsError => ({
  type: ActionType.GET_POSTS_ERROR,
  payload: {
    error,
  },
});

type getSinglePostStart = {
  type: typeof ActionType.GET_SINGLE_POST_START;
};
export const getSinglePostStart = (): getSinglePostStart => ({
  type: ActionType.GET_SINGLE_POST_START,
});

type getSinglePostSuccess = {
  type: typeof ActionType.GET_SINGLE_POST_SUCCESS;
  payload: { post: PostsType };
};
export const getSinglePostSuccess = (
  post: PostsType
): getSinglePostSuccess => ({
  type: ActionType.GET_SINGLE_POST_SUCCESS,
  payload: {
    post,
  },
});

type getSinglePostError = {
  type: typeof ActionType.GET_POSTS_ERROR;
  payload: { error: Error };
};
export const getSinglePostError = (error: Error): getSinglePostError => ({
  type: ActionType.GET_POSTS_ERROR,
  payload: {
    error,
  },
});

type addPostStart = {
  type: typeof ActionType.ADD_POST_START;
};
export const addPostStart = (): addPostStart => ({
  type: ActionType.ADD_POST_START,
});

type addPostSuccess = {
  type: typeof ActionType.ADD_POST_SUCCESS;
  payload: { post: AddPost };
};
export const addPostSuccess = (post: AddPost): addPostSuccess => ({
  type: ActionType.ADD_POST_SUCCESS,
  payload: {
    post,
  },
});

type addPostError = {
  type: typeof ActionType.ADD_POST_ERROR;
  payload: { error: Error };
};
export const addPostError = (error: Error): addPostError => ({
  type: ActionType.ADD_POST_ERROR,
  payload: {
    error,
  },
});

type deletePostStart = {
  type: typeof ActionType.DELETE_POST_START;
};

export const deletePostStart = (): deletePostStart => ({
  type: ActionType.DELETE_POST_START,
});

type deletePostSuccess = {
  type: typeof ActionType.DELETE_POST_SUCCESS;
  payload: { id: number };
};
export const deletePostSuccess = (id: number): deletePostSuccess => ({
  type: typeof ActionType.DELETE_POST_SUCCESS,
  payload: { id },
});

type deletePostError = {
  type: typeof ActionType.DELETE_POST_ERROR;
  payload: { error: Error };
};
export const deletePostError = (error: Error): deletePostError => ({
  type: ActionType.DELETE_POST_ERROR,
  payload: { error },
});
