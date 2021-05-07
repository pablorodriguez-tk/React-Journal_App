import { types } from "../../types/types";

describe("Pruebas con nuestros Types", () => {
  test("Debe de tener estos types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",

      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",

      uiStartLoading: "[UI] Start Loading",
      uiFinishLoading: "[UI] Finish Loading",

      notesAddNew: "[NOTES] New Note",
      notesActive: "[NOTES] Set active note",
      notesLoad: "[NOTES] Load notes",
      notesUpdated: "[NOTES] Updated note",
      notesFileUrl: "[NOTES] Updated image url",
      notesDelete: "[NOTES] Delete note",
      notesLogoutCleaning: "[NOTES] Logout Cleaning",
    });
  });
});
