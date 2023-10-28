import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./components/mainpage";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/mainpage' element={<Mainpage />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;