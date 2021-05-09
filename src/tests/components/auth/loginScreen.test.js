import React from "react";
import { mount } from "enzyme";
import LoginScreen from "../../../components/auth/LoginScreen";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();
const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  </MemoryRouter>
);

describe("Pruebas en <LoginScreen/>", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("Debe de mostrarse correctamenteu", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de disparar la accion de starGoogleLogin", () => {
    wrapper.find(".google-btn").prop("onClick")();
    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test("Debe de disparar el startLogin con los respectivos argumentos", () => {
    wrapper.find("form").prop("onSubmit")({ preventDefault() {} });
    expect(startLoginEmailPassword).toHaveBeenCalledWith("", "");
  });
});
