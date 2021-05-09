import React from "react";
import { mount } from "enzyme";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router";
import { login } from "../../actions/auth";
import AppRouter from "../../routers/AppRouter";
import { act } from "react-dom/test-utils";
import { firebase } from "../../firebase/firebase-config";

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: "ABC",
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe("Pruebas en <AppRouter/>", () => {
  test("Debe de llamar el login si estoy autenticado", async () => {
    await act(async () => {
      let user;

      const userCred = await firebase
        .auth()
        .signInWithEmailAndPassword("test@testing.com", "123456");
      user = userCred.user;
      const wrapper = mount(
        <MemoryRouter>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>
      );
    });
    expect(login).toHaveBeenCalledWith("IvWNfOfVZlT0N86qUQJIHlMJ06S2", null);
  });
});
