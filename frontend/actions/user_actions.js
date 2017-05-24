export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const CLEAR_USER = "CLEAR_USER";
import * as APIUtil from '../util/user_util';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const updateOneUser = user => ({
  type: UPDATE_USER,
  user
});

export const clearUser = () => ({
  type: CLEAR_USER
});

export const fetchOneUser = userId => dispatch => {
  return APIUtil.fetchOneUser(userId)
    .then(user => dispatch(receiveUser(user)));
};


export const updateUser = user => dispatch => {
  return APIUtil.updateUser(user)
    .then(newUser => dispatch(updateOneUser(newUser)));
};
