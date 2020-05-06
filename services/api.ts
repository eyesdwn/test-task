import axios from "axios";

const baseURL = "https://simple-blog-api.crew.red/posts";

export const getAllPosts = () => axios.get(baseURL);

export const addPost = (post: any) => axios.post(baseURL, post);

export const getSinglePost = (id: number) =>
  axios.get(`${baseURL}/${id}?_embed=comments`);

export const deletePost = (id: number) => axios.delete(`${baseURL}/${id}`);
