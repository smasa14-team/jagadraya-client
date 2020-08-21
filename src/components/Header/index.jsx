import React from "react";
import logo from "../../assets/images/logo-smasa.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav
          color="white"
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              className="d-inline-block align-middle"
              width="64"
              height="64"
              alt="smasa-logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Halaman Depan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/history">
                  Daftar Kegiatan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/documentations">
                  Dokumentasi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/articles">
                  Artikel
                </a>
              </li>
              <li className="nav-item button">
                <a className="nav-link login-Btn text-center" href="#">
                  Masuk
                </a>
                <a className="nav-link register-Btn text-center" href="/register">
                  Daftar
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
