import React from "react";
import { Provider } from "react-redux";
import store from "@/redux";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
