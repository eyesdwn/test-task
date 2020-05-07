import React from "react";
import styled from "styled-components";
import { PostsType } from "../interfaces/index";

const PostWrapper = styled.div`
  margin: 0 auto;
  width: 40%;
  padding: 20px;
  text-align: left;
  font-family: helvetica;
  font-size: medium;
  font-weight: 200;
  background-color: rgba(115, 93, 91, 0.6);
`;
const PostTitle = styled.h2`
  color: white;
`;
const PostBody = styled.p`
  color: #feb59d;
`;
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

type Props = {
  singlePost: PostsType;
  onDeletePost: (id: number) => void;
};

const Post = ({ onDeletePost, singlePost }: Props) => {
  return (
    <PostWrapper>
      <PostTitle>{singlePost.title}</PostTitle>
      <PostBody>{singlePost.body}</PostBody>
      <DeleteButton onClick={() => onDeletePost(singlePost.id)} type="button">
        Delete
      </DeleteButton>
    </PostWrapper>
  );
};

export default Post;
