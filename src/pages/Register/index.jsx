/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FormGroup, Label } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { AUTH_ONCHANGE } from "../../redux/types/auth";

import GoogleLogo from "../../assets/images/google.svg";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";

export default function Register() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [typeDate, setTypeDate] = useState(false);
  const toggleDate = () => setTypeDate(!typeDate);
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => setShowPass(!showPass);
  const [error, setError] = useState({
    fullname: "",
    birthdate: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSubmit = () => {
    if (handleValidation()) {
      return alert("Oke!");
    } else {
      return alert("nope.");
    }
  }; /**dispatch(LoginAction({ email, password })) */
  const onKeyPress = ({ key }) => key === "Enter" && null;
  /**dispatch(LoginAction({ email, password }))**/
  function onChangeValue(e) {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: AUTH_ONCHANGE, payload: { name, value } });
  }

  function handleValidation() {
    let formIsValid = true;
    const error = {};

    // FULLNAME
    if (!auth.fullname) {
      formIsValid = false;
      error.fullname = "Tidak boleh kosong!";
    } else {
      if (!auth.fullname.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        error.fullname = "Hanya boleh diisi huruf!";
      }
    }

    // EMAIL
    if (!auth.email) {
      formIsValid = false;
      error.email = "Tidak boleh kosong!";
    } else {
      let lastAtPos = auth.email.lastIndexOf("@");
      let lastDotPos = auth.email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          auth.email.indexOf("@") == -1 &&
          lastDotPos > 2 &&
          auth.email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        error.email = "Email tidak valid!";
      }
    }

    setError(error);
    return formIsValid;
  }

  return (
    <div className="register-container">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="register-card">
        <h1 className="title">Daftar</h1>
        <div className="subtitle">Pendaftar selain SMASA14 akan membutuhkan waktu konfirmasi</div>

        <FormInput
          onChange={onChangeValue}
          onKeyPress={onKeyPress}
          placeholder="Nama Lengkap"
          invalid={error.fullname.length > 0}
          errorMsg={error.fullname}
          type="text"
          name="fullname"
        />
        <FormInput
          onChange={onChangeValue}
          onKeyPress={onKeyPress}
          placeholder="Tanggal Lahir"
          onBlur={toggleDate}
          onFocus={toggleDate}
          type={typeDate ? "date" : "text"}
          name="birthdate"
        />
        <FormInput
          onChange={onChangeValue}
          onKeyPress={onKeyPress}
          placeholder="Alamat Email"
          invalid={error.email.length > 0}
          errorMsg={error.email}
          type="email"
          name="email"
        />
        <FormInput
          placeholder="Kata Sandi"
          onChange={onChangeValue}
          onKeyPress={onKeyPress}
          togglePass={togglePass}
          password
          type={showPass ? "text" : "password"}
          name="password"
        />
        <FormInput
          placeholder="Konfirmasi Kata Sandi"
          onChange={onChangeValue}
          onKeyPress={onKeyPress}
          togglePass={togglePass}
          password
          type={showPass ? "text" : "password"}
          name="password2"
        />

        <FormGroup id="login-checkbox">
          <Label className="custom checkbox">
            <input
              type="checkbox"
              checked={auth.checkbox}
              onChange={() =>
                dispatch({
                  type: AUTH_ONCHANGE,
                  payload: { name: "checkbox", value: !auth.checkbox },
                })
              }
            />
            <span className="checkmark login" />
            <span className="checklabel">
              Dengan ini saya meyakini bahwa data yang saya masukkan adalah benar
            </span>
          </Label>
        </FormGroup>

        <Button
          onClick={onSubmit}
          style={{ marginTop: 32, marginBottom: 24 }}
          block
          theme="primary">
          Daftar
        </Button>

        {/* <div className="punya-akun">
          Sudah punya akun? <Button theme="link">Masuk</Button>
        </div> */}

        {/* <div className="atau">
          <div />
          <div>atau</div>
          <div />
        </div>

        <div className="punya-akun">Masuk menggunakan</div>

        <div className="with-google">
          <button className="btn">
            <img src={GoogleLogo} alt="logo" />
            <span>Sign in with Google</span>
          </button>
        </div> */}
      </div>
    </div>
  );
}
