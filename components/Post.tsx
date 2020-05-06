import React from "react";
import styled from "styled-components";
import { PostsType } from "../interfaces/index";

const PostWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  border-radius: 10px;
  text-align: left;
  font-family: sans-serif;
`;

const PostBody = styled.p`
  color: #313b3f;
`;

type Props = {
  currentPost: PostsType;
};

const Post = ({ currentPost }: Props) => {
  return (
    <PostWrapper>
      <h2>{currentPost.title}</h2>
      <PostBody>{currentPost.body}</PostBody>
    </PostWrapper>
  );
};

export default Post;
