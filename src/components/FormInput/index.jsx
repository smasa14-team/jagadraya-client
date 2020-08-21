import React from "react";
import { FormGroup, Label, Input, InputGroup, InputGroupAddon } from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../assets/styles/components/_formInput.scss";

export const FormInput = ({
  containerStyle,
  labelStyle,
  inputStyle,
  label,
  required,
  invalid,
  errorMsg,
  rows,
  type,
  name,
  autoComplete = "off",
  placeholder,
  onFocus,
  onBlur,
  onChange = () => null,
  onKeyPress = () => null,
  defaultValue,
  value,
  prepend,
  append,
  counter = false,
  textCount,
  maxLength,
  password,
  togglePass,
}) => {
  //
  function TextCounter({ text = "", maxCount = 0 }) {
    function classname() {
      let string = "d-block text-right m-0 ";
      if (text.length === 0) string += "text-muted";
      if (text.length >= maxCount) string += "text-danger";
      return string;
    }
    return (
      <span style={{ lineHeight: 1 }} className={classname()}>
        <small>{`${text.length} / ${maxCount}`}</small>
      </span>
    );
  }
  function styles() {
    let classname = "";
    if (inputStyle) {
      classname += inputStyle;
    }
    return classname;
  }

  return (
    <div className="custom-input">
      <FormGroup className={containerStyle}>
        {label ? (
          <Label className={labelStyle}>
            {label}
            {required ? <span>*</span> : null}
          </Label>
        ) : null}
        <InputGroup style={{ borderColor: invalid ? "#dc3545" : "#ced4da" }}>
          {prepend ? <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon> : null}
          <Input
            onChange={onChange}
            onKeyPress={onKeyPress}
            defaultValue={defaultValue}
            value={value}
            invalid={invalid}
            onBlur={onBlur}
            onFocus={onFocus}
            maxLength={maxLength}
            rows={rows}
            type={type}
            name={name}
            className={styles()}
            autoComplete={autoComplete}
            placeholder={placeholder}
          />
          {!password || invalid ? null : (
            <button className="btn btn-float" tabIndex="-1" onClick={togglePass}>
              {type === "text" ? <FaEye color="#8F9BB3" /> : <FaEyeSlash color="#8F9BB3" />}
            </button>
          )}
          {append ? <InputGroupAddon addonType="append">{append}</InputGroupAddon> : null}
        </InputGroup>
        {invalid ? <div className="invalid-feedback">{errorMsg}</div> : null}
        {counter ? <TextCounter text={textCount} maxCount={maxLength} /> : null}
      </FormGroup>
    </div>
  );
};
