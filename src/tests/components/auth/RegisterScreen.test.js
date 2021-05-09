import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import RegisterScreen from "../../../components/auth/RegisterScreen";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router";
import { types } from "../../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    notes: [],
    active: null,
  },
};

let store = mockStore(initState);

const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <RegisterScreen />
    </Provider>
  </MemoryRouter>
);

describe("Pruebas en <RegisterScreen/>", () => {
  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de hacer el dispatch de la accion respectiva", () => {
    const emailField = wrapper.find('input[name="email"]');
    emailField.simulate("change", { target: { value: "", name: "email" } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: "Email is not valid",
    });
  });

  test("Debe de mostrar la caja de alerta con el error", () => {
    const initState = {
      auth: {},
      ui: {
        loading: false,
        msgError: "Email no es correcto",
      },
      notes: {
        notes: [],
        active: null,
      },
    };

    const store = mockStore(initState);

    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <RegisterScreen />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(".auth__alert-error").exists()).toBe(true);
    expect(wrapper.find(".auth__alert-error").text().trim()).toBe(
      initState.ui.msgError
    );
  });
});
