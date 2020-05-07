import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/operations";
import styled from "styled-components";
import { AddPost } from "../interfaces";

const Form = styled.form`
  margin: 0 auto;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  padding: 40px 0px 40px 40px;
  width: 40%;
  margin-top: 30px;
  padding: 20px;
  text-align: left;
  background-color: rgba(255, 162, 157, 0.3);
  transition: background-color ease-in 0.3s;
  cursor: pointer;
`;

const FormLabel = styled.label`
  padding-bottom: 15px;
`;

const FormInputTitle = styled.input`
  margin: 0 auto;
  width: 90%;
  margin-top: 15px;
  font-size: medium;
  display: block;
  padding: 10px;
`;

const FormInputText = styled.textarea`
  margin: 0 auto;
  width: 90%;
  height: 200px;
  margin-top: 15px;
  font-size: medium;
  display: block;
  padding: 10px;
  resize: none;
`;

const FormButton = styled.button`
  margin: 0 auto;
  width: 160px;
  font-size: small;
  margin-top: 10px;
  padding: 10px;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: rgb(116, 39, 79, 0.7);
  border: none;
  transition: ease-in 0.6s;
  :hover {
    background-color: rgb(116, 39, 79, 1);
  }
`;

type Props = {
  createPost: any;
};

const PostForm = ({ createPost }: Props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeTitle = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setBody(e.target.value);
  };

  const reset = (): void => {
    setTitle("");
    setBody("");
  };

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault();

    if (!title || !body) return;

    const newPost: AddPost = {
      title,
      body,
    };

    createPost(newPost);

    reset();
    alert("New Post has been added.");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="title">
        <FormInputTitle
          id="title"
          placeholder="Enter Post title"
          type="text"
          value={title}
          name="title"
          onChange={onChangeTitle}
        />
      </FormLabel>
      <FormLabel htmlFor="text">
        <FormInputText
          id="text"
          value={body}
          name="text"
          onChange={onChangeBody}
          placeholder="Enter Post text"
        />
      </FormLabel>
      <FormButton type="submit">Add Post</FormButton>
    </Form>
  );
};

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
