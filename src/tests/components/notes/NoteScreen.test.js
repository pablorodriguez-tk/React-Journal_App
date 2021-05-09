import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import NoteScreen from "../../../components/notes/NoteScreen";
import { activeNote } from "../../../actions/notes";

jest.mock("../../../actions/notes", () => ({
  activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "1",
    name: "Pablo",
  },
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: 1234,
      title: "title",
      body: "body",
      date: 0,
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();
const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe("Pruebas en <NoteScreen/>", () => {
  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de disparar el active note", () => {
    wrapper.find('input[name="title"]').simulate("change", {
      target: { name: "title", value: "Hola de nuevo" },
    });
    expect(activeNote).toHaveBeenLastCalledWith(1234, {
      body: "body",
      date: 0,
      id: 1234,
      title: "Hola de nuevo",
    });
  });
});
