import React from "react";
import '../src/styles/Styles.css'
import SalesDisplay from "./Components/SalesDisplay.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import Header from "./Header.tsx";

export default function App() {
    return(
        <Provider store={store}>
            <Header></Header>
            <SalesDisplay></SalesDisplay>
        </Provider>
    )
}