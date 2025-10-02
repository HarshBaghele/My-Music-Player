import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NoteContext from "./Notecontext";
const Navbar = () => {
   const { oldsong,motisongs,sad,punjabi,english,friend,lovesong ,Shiv,bajrangbali,Weeding} = useContext(NoteContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Music App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <div className="dropdown" >
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="drop">
                  Song Categories
                </button>
                <ul className="dropdown-menu">
  <li>
    <Link to="/Songs" className="dropdown-item" onClick={lovesong} style={{ textDecoration: "none" }}>
      Love
    </Link>
  </li>
  <li>
    <Link to="/Songs" className="dropdown-item" onClick={punjabi} style={{ textDecoration: "none" }}>
      Punjabi
    </Link>
  </li>
  <li>
    <Link to="/Songs" className="dropdown-item" onClick={oldsong} style={{ textDecoration: "none" }}>
      90s
    </Link>
  </li>
  <li>
    <Link to="/Songs" className="dropdown-item" onClick={motisongs} style={{ textDecoration: "none" }}>
      Motivational
    </Link>
  </li>
  <li>
    <Link to="/Songs" className="dropdown-item" onClick={sad} style={{ textDecoration: "none" }}>
      Sad
    </Link>
  </li>
  <li>
    <Link to="/Songs" className="dropdown-item" onClick={Weeding} style={{ textDecoration: "none" }}>
      Weeding
    </Link>
  </li>
  <li>
    <Link to="/Songs" className="dropdown-item" onClick={english} style={{ textDecoration: "none" }}>
      English
    </Link>
  </li>
  <li>
    <Link to="/Songs" className="dropdown-item" onClick={friend} style={{ textDecoration: "none" }}>
      Friendship
    </Link>
  </li>
  <li>
    <Link to="/Songs" className="dropdown-item" onClick={Shiv} style={{ textDecoration: "none" }}>
      Shivji
    </Link>
  </li>
  <li>
    <Link to="/Songs" className="dropdown-item" onClick={bajrangbali} style={{ textDecoration: "none" }}>
      Bajrangbali
    </Link>
  </li>
</ul>

              </div>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;