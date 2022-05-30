import React from "react";
import './sideNav.css'
const SideNav = () => {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>bootstrap header</h3>
        </div>
        <ul className="list-unstyled components">
          <p>the Providers</p>
          <li className="actibe">
            <a
              href="$homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Home
            </a>
            <ul className="collapse list-ubstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 1</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
            </ul>
          </li>
          <li>
                <a href="#">Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>

        </ul>
      </nav>

    <div id="content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="contianer-fluid">
          <button type="button" id="sidebarcollapse" className="btn btn-info">
            <i className="fas fa-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>
        </div>
      </nav>

      <br/>
      <br/>
      <h2>Collapsable sidebar using bootstrap</h2>
      <p>some text</p>
      <p>some text</p>
      <div clasName="line"></div>
    </div>

    </div>
  );
};

export default SideNav;
