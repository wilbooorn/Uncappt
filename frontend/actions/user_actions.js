export const RECEIVE_USER = "RECEIVE_USER";
import * as APIUtil from '../util/user_util';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchOneUser = userId => dispatch => {
  return APIUtil.fetchOneUser(userId)
    .then(user => dispatch(receiveUser(user)));
};
