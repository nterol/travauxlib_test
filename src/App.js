import React from "react";
import { GlobalStyle } from "./components/globalStyle";
import Main from "./components/Main";
import { Provider } from "react-redux";

import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Main />
      </Provider>
    </>
  );
}

export default App;
