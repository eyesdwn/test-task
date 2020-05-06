import React from "react";
import Head from "next/head";
import styled from "styled-components";

import PostForm from "../../components/PostForm";

const Body = styled.body`
  background-attachment: fixed;
  background: url("https://alliswall.com/file/3057/1920x1200/16:9/dream-universe.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const CreatePostPage = (): JSX.Element => {
  return (
    <Body>
      <Head>
        <title>Add New Post</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <PostForm />
    </Body>
  );
};

export default CreatePostPage;
