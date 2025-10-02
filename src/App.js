import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import MainPage from "./components/MainPage";
import NoteState from "./components/Notestate";
import Songs from "./components/Songs";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    
    <div style={{backgroundColor:'black',color:'white'}}>
       <BrowserRouter>
        <NoteState>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Songs" element={<Songs/>} />
          </Routes>
        </NoteState>
      </BrowserRouter>
    </div>
  );
}

export default App;
