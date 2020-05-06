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
  onDeletePost: (id: number) => void;
};
const DeleteButton = styled.button`
  margin: 0 auto;
  width: 60px;
  font-size: small;
  padding: 5px;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: rgb(116, 39, 79, 0.7);
  border: none;
  -webkit-transition: ease-in 0.6s;
  transition: ease-in 0.6s;
  /* text-align: right; */
  // position: absolute;
  right: 0;
  margin-right: 20px;
`;

const PostsListItem = ({ post, onDeletePost }: Props) => {
  return (
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
      <PostItem>
        <DeleteButton onClick={() => onDeletePost(post.id)} type="button">
          Delete
        </DeleteButton>
        <PostTitle>{post.title}</PostTitle>
        <PostText>{post.body}</PostText>
      </PostItem>
    </Link>
  );
};

export default PostsListItem;
