import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import Nav from "../components/Nav";

const MyApp = (props: any): any => {
  const { Component, pageProps, store } = props;
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux(store)(MyApp);
