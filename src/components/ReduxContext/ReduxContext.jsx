"use client"

import { Provider } from "react-redux";
import { store } from "../../Redux/store";

export const ReduxContext = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
};
