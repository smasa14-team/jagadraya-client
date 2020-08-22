/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <footer className="footer">
          <div className="top-footer">
            <div className="row">
              <div className="col-sm-3">
                <div className="footer-logo">
                  <h3>JAGAD RAYA</h3>
                  <p className="tagline">Berusaha produktif di tengah pandemi semoga istiqomah.</p>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <h4>Ikuti Kami</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="/home" title="Home">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a href="/workspace" title="Workspace">
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h4>Cari Tahu</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="#" title="Monthly Pricing">
                          Tentang Jagad Raya
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h4>FAQ</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="#" title="Company">
                          Laman Tanya Jawab
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <h4>Dokumentasi</h4>
                    <ul className="footer-link">
                      <li>
                        <a href="mail-to:contact@scconline.com" title="Contact">
                          Kegiatan Sebelumnya
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Call Us">
                          Rekaman Kegiatan
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="row">
              <div className="text">
                <p>2020 Jagad Raya Team</p>
              </div>
              <div className="text">
                <p>jagadraya@gmail.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
