import * as API from "../services/api";
import { Dispatch } from "redux";
import { PostsActionsTypes } from "./actions";
import { PostsType, Error } from "../interfaces/index";

import * as actions from "./actions";

export const getPostsList = () => (
  dispatch: Dispatch<PostsActionsTypes>
): void => {
  dispatch(actions.getPostsStart());

  API.getAllPosts()
    .then((response: { data: PostsType[] }) =>
      dispatch(actions.getPostsSuccess(response.data))
    )
    .catch((error: Error) => dispatch(actions.getPostsError(error)));
};

export const createPost = (post: PostsType) => (
  dispatch: Dispatch<PostsActionsTypes>
): void => {
  dispatch(actions.addPostStart());

  API.addPost(post)
    .then((response: { data: any }) =>
      dispatch(actions.addPostSuccess(response.data))
    )
    .catch((error: Error) => dispatch(actions.addPostError(error)));
};

export const getSinglePost = (id: number) => (
  dispatch: Dispatch<PostsActionsTypes>
): void => {
  dispatch(actions.getSinglePostStart());

  API.getSinglePost(id)
    .then((response: { data: any }) =>
      dispatch(actions.getSinglePostSuccess(response.data))
    )
    .catch((error: any) => dispatch(actions.getSinglePostError(error)));
};

export const deletePost = (id: number) => (
  dispatch: Dispatch<PostsActionsTypes>
): void => {
  dispatch(actions.deletePostStart());

  API.deletePost(id)
    .then((response: { data: any }) =>
      dispatch(actions.deletePostSuccess(response.data))
    )
    .catch((error: any) => dispatch(actions.deletePostError(error)));
};
