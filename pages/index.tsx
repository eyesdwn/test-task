import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { PostsType, BlogState } from "../interfaces/index";
import * as selectors from "../redux/selectors";
import * as operations from "../redux/operations";
import Head from "next/head";
import PostList from "../components/PostList";

type Props = {
  posts: Array<PostsType>;
  getPostsList: any;
};
const Body = styled.body`
  font-family: sans-serif;
  color: #fff;
  background: url("https://alliswall.com/file/3057/1920x1200/16:9/dream-universe.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
const indexPage = ({ posts, getPostsList }: Props) => {
  useEffect(() => {
    getPostsList();
  }, []);

  return (
    <Body>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <div>
        <PostList posts={posts} />
      </div>
    </Body>
  );
};

type StateProps = {
  posts: PostsType[];
};

const mapStateToProps = (store: BlogState): StateProps => ({
  posts: selectors.getPosts(store),
});

const mapDispatchToProps = {
  getPostsList: operations.getPostsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(indexPage);
