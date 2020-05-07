import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { PostsType } from "../interfaces/index";

const PostItem = styled.li`
  // position: relative;
  width: 40%;
  margin-top: 30px;
  padding: 20px;
  text-align: left;
  background-color: rgba(255, 162, 157, 0.3);
  :hover {
    background-color: rgba(115, 93, 91, 0.6);
  }
  transition: background-color ease-in 0.3s;
  cursor: pointer;
`;
const PostTitle = styled.h3`
  font-weight: 500;
`;
const PostText = styled.p`
  color: #feb59d;
  font-family: helvetica;
  font-size: medium;
  font-weight: 200;
`;

type Props = {
  post: PostsType;
};

const PostsListItem = ({ post }: Props) => {
  return (
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
      <PostItem>
        <PostTitle>{post.title}</PostTitle>
        <PostText>{post.body}</PostText>
      </PostItem>
    </Link>
  );
};

export default PostsListItem;
