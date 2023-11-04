// ROUTING PAGE

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/login";
import MainPage from "./components/mainpage";
import Register from "./components/register";
import AddNewSong from "./components/addnewsong";
import View from "./components/view";
import Update from "./components/update";
import Delete from "./components/delete";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="mainpage" element={<MainPage />} />
          <Route path="register" element={<Register />} />
          <Route path="addnewsong" element={<AddNewSong />} />
          <Route path="update" element={<Update />} />
          <Route path="delete" element={<Delete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
