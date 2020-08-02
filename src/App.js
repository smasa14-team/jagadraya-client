import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Artikel from "./pages/Artikel";
import DaftarKegiatan from "./pages/DaftarKegiatan";
import Dokumentasi from "./pages/Dokumentasi";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/artikel" component={Artikel} />
        <Route path="/kegiatan" component={DaftarKegiatan} />
        <Route path="/dokumentasi" component={Dokumentasi} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}
