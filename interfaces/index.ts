export type CommentsType = {
  id: number;
  postId: number;
  body: string;
};

export type PostsType = {
  id: number;
  title: string;
  body: string;
  comments: Array<CommentsType>;
};

export type Error = {
  message: string | null;
  name: string | null;
  stack: string | null;
  config: object | null;
};

export type stateType = {
  posts: Array<PostsType>;
  post: PostsType;
  error: Error | null;
};

export type AddPost = {
  title: string;
  body: string;
};
