import * as APIUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signin = (user) => dispatch => {
  return APIUtil.signin(user).then(() => dispatch(receiveCurrentUser(user)))
  .fail(error => dispatch(receiveErrors(error.responseJSON)));
};

export const signout = () => dispatch => (
  APIUtil.signout().then(res => dispatch(receiveCurrentUser(null)),
  error => dispatch(receiveErrors(error.responseJSON)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(res => dispatch(receiveCurrentUser(res)),
  error => dispatch(receiveErrors(error.responseJSON)))
);

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});
