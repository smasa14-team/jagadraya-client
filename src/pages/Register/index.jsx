/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FormGroup, Label } from "reactstrap";

import GoogleLogo from "../../assets/images/google.svg";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";

export default function Register() {
  const [typeDate, setTypeDate] = useState(false);
  const toggleDate = () => setTypeDate(!typeDate);
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => setShowPass(!showPass);

  const onSubmit = () => null; /**dispatch(LoginAction({ email, password })) */
  const onKeyPress = ({ key }) => key === "Enter" && null;
  /**dispatch(LoginAction({ email, password }))**/
  function onChangeValue(e) {
    let name = e.target.name;
    let value = e.target.value;
    // dispatch({ type: AUTH_LOGIN_ONCHANGE, payload: { name, value } });
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="title">Daftar</h1>
        <div className="subtitle">Pendaftar selain SMASA14 akan membutuhkan waktu konfirmasi</div>

        <FormInput
          onChange={onChangeValue}
          onKeyPress={onKeyPress}
          placeholder="Nama Lengkap"
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
            <input type="checkbox" />
            <span className="checkmark login" />
            <span className="checklabel">
              Dengan ini saya meyakini bahwa data yang saya masukkan adalah benar
            </span>
          </Label>
        </FormGroup>

        <Button style={{ marginTop: 32, marginBottom: 24 }} block theme="primary">
          Daftar
        </Button>

        <div className="punya-akun">
          Sudah punya akun? <Button theme="link">Masuk</Button>
        </div>

        <div className="atau">
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
        </div>
      </div>
    </div>
  );
}
