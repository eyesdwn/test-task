import React from "react";
import styled from "styled-components";
import { PostsType } from "../interfaces/index";
import PostsListItem from "../components/PostListItem";

const PostList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: sans-serif;
  padding: 0;
  width: 1000px;
  margin: 0 auto;
`;

type Props = {
  posts: Array<PostsType>;
};

const PostsList = ({ posts = [] }: Props) => {
  return (
    <PostList>
      {posts.reverse().map(post => (
        <PostsListItem key={post.id} post={post} />
      ))}
    </PostList>
  );
};

export default PostsList;
