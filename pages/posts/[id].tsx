import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";
import { PostsType, BlogState } from "../../interfaces/index";
import * as selectors from "../../redux/selectors";
import * as operations from "../../redux/operations";
import Post from "../../components/Post";

type Props = {
  singlePost: PostsType;
  getSinglePost: any;
  deletePost: (id: number) => void;
};
const Body = styled.body`
  background: url("https://alliswall.com/file/3057/1920x1200/16:9/dream-universe.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const PostPage = ({ singlePost, getSinglePost, deletePost }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const deletePostWithAlert = () => {
    deletePost(singlePost.id);
    alert("The post has been deleted");
  };

  useEffect(() => {
    getSinglePost(id);
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
      {singlePost && (
        <Post singlePost={singlePost} onDeletePost={deletePostWithAlert} />
      )}
    </Body>
  );
};

type StateProps = {
  singlePost: PostsType;
};

const mapStateToProps = (store: BlogState): StateProps => ({
  singlePost: selectors.getSinglePost(store),
});

const mapDispatchToProps = {
  deletePost: operations.deletePost,
  getSinglePost: operations.getSinglePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
