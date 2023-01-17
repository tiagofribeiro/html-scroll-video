import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";

export default class App extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </>
        );
    }
}