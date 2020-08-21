import React from "react";
import { Helmet } from "react-helmet";

function Dummy(props) {
  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Your website is under construction." />
        <title>Landing Page</title>
        {/* <link
      rel="shortcut icon"
      href="https://files.domainesia.com/repo/cpanel-assets/defaults/favicon.png"
    /> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://files.domainesia.com/repo/cpanel-assets/defaults/css/default.css"
        />
        <script
          type="text/javascript"
          src="https://files.domainesia.com/repo/cpanel-assets/defaults/js/jquery-1.10.2-min.js"></script>
        <script
          type="text/javascript"
          src="https://files.domainesia.com/repo/cpanel-assets/defaults/js/wright-custom.js"></script>
      </Helmet>
      <div id="wrapper" className="gradient">
        {/*  Header  */}
        <div id="logoimg">
          {/*  Company Logo  */}
          <a href="https://www.domainesia.com">
            {/* <img
            style="max-width: 18rem;"
            src="https://static.domainesia.com/assets/images/logo-domainesia-v4.png"
            alt="Hosting Indonesia"
            title="Hosting Indonesia"
        /> */}
          </a>
        </div>
        {/*  End Header  */}
        {/*     Background Elements     */}
        <div className="skyelement jupiter" />
        <div className="skyelement planet" />
        <div className="skyelement mount" />
        <div className="ccontainer">
          <div id="clouds">
            <div className="skyelement cloud1" />
            <div className="skyelement cloud2" />
          </div>
          <div id="clouds2">
            <div className="skyelement cloud3" />
            <div className="skyelement cloud4" />
            <div className="skyelement cloud5" />
          </div>
          <div id="clouds3">
            <div className="skyelement cloud1" />
            <div className="skyelement cloud2" />
            <div className="skyelement cloud3" />
            <div className="skyelement cloud4" />
            <div className="skyelement cloud5" />
          </div>
        </div>
        <div className="skyelement ground" />
        <div className="skyelement mushroom" />
        <div className="skyelement tree" />
        <div className="skyelement rocket" />
        {/*     Content Box      */}
        <div className="skyelement content">
          {/*     Inner Box      */}
          <div className="inner">
            <div className="chain1" />
            <div className="chain2" />
            {/*   Title for Content Box    */}
            <h1>Coming Soon!</h1>
            <p id="domainesia">
              Something nice is currently
              <br />
              being cooked.
              <br />
              {/* to <strong>jagadraya.site</strong> directory */}
              <br />
              We hope you have a good day!
              <br />- JagadRaya
            </p>
          </div>
          {/*    End Inner Box      */}
        </div>
        {/*    End Content Box      */}
      </div>
      {/*    End Wrapper     */}
      <div id="footer">
        <div>
          {/* <p style="color: #fff;">
          Halaman ini merupakan halaman default. Silakan upload konten website anda.
        </p> */}
          <br />
          <br />
          <br />
          {/* <p>
          Top Provider Cloud Web Hosting di Indonesia:
          <a href="https://www.domainesia.com/hosting/">Hosting</a><br />
          Daftarkan Nama Domain dengan Mudah dan Murah:
          <a href="https://www.domainesia.com/domain/">Domain</a>
        </p> */}
        </div>
      </div>
    </div>
  );
}

export default Dummy;
