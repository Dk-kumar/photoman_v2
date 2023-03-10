import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.component";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={ <Home /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;