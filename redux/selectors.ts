import { stateType, PostsType } from "../interfaces/index";

export const getPosts = (state: stateType): Array<PostsType> => state.posts;
export const getSinglePost = (state: stateType): PostsType => state.post;
