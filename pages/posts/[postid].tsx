import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";
import { PostsType, stateType } from "../../interfaces/index";
import * as selectors from "../../redux/selectors";
import * as operations from "../../redux/operations";
import Post from "../../components/Post";

type Props = {
  post: PostsType;
  getSinglePost: any;
};
const Body = styled.body`
  background: url("https://alliswall.com/file/3057/1920x1200/16:9/dream-universe.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const PostPage = ({ post, getSinglePost }: Props) => {
  const router = useRouter();
  const { postid } = router.query;
  console.log(post);

  useEffect(() => {
    getSinglePost(postid);
  }, []);

  return (
    <Body>
      <Head>
        <title>Post Title</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      {post && <Post currentPost={post} />}
    </Body>
  );
};

type StateProps = {
  post: PostsType;
};

const mapStateToProps = (store: stateType): StateProps => ({
  post: selectors.getSinglePost(store),
});

const mapDispatchToProps = {
  getSinglePost: operations.getSinglePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
