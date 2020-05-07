import { BlogState, PostsType } from "../interfaces/index";

// export const getPosts = (state: stateType): Array<PostsType> => state.posts;
// export const getSinglePost = (state: stateType): PostsType => state.post;

export const getPosts = (state: BlogState): Array<PostsType> =>
  state.blog.posts;
export const getSinglePost = (state: BlogState): PostsType =>
  state.blog.singlePost;
