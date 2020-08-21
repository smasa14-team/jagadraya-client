import { AUTH_ONCHANGE, AUTH_START, AUTH_FAILED, AUTH_REG_SUCCESS } from "../types/auth";

const init_state = {
  fullname: "",
  birthdate: "",
  email: "",
  password: "",
  password2: "",
  checkbox: "",

  login: false,
  register: false,
  loading: false,
  error: false,
  message: "",
};

export default (state = init_state, { type, payload }) => {
  switch (type) {
    case AUTH_START:
      return { ...state, loading: true, error: false, message: "" };
    case AUTH_FAILED:
      return { ...state, loading: false, error: true, message: payload };
    case AUTH_REG_SUCCESS:
      return { ...init_state, login: true };

    case AUTH_ONCHANGE:
      return { ...state, [payload.name]: payload.value };

    default:
      return state;
  }
};
