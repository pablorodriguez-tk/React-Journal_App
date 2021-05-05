import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "Pedro"));
    }, 3500);
  };
};

export const startGoogleLogin = () => {
  return (dipatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dipatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
  type: types.logout,
  payload: {},
});
