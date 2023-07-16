import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./component/cakeContainer";
import CakeConatinerHooksRedux from "./component/cakeConatinerHooksRedux";
import IcecreamContainer from "./component/iceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeConatinerHooksRedux />
        <IcecreamContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
