export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
export const RECEIVE_ONE_CHECKIN = "RECEIVE_ONE_CHECKIN";
export const CREATE_CHECKIN = "CREATE_CHECKIN";
export const DELETE_CHECKIN = "DELETE_CHECKIN";
export const UPDATE_CHECKIN = "UPDATE_CHECKIN";
export const RECEIVE_CHECKIN_ERRORS = "RECEIVE_CHECKIN_ERRORS";
import * as APIUtil from '../util/checkin_util';

export const receiveAllCheckins = checkins =>({
  type: RECEIVE_ALL_CHECKINS,
  checkins
});

export const receiveOneCheckin = checkin => ({
  type: RECEIVE_ONE_CHECKIN,
  checkin
});

export const sendOneCheckin = checkin => ({
  type: CREATE_CHECKIN,
  checkin
});
export const deleteOneCheckin = checkin => ({
  type: DELETE_CHECKIN,
  checkin
});

export const updateOneCheckin = checkin => ({
  type: UPDATE_CHECKIN,
  checkin
});

export const receiveCheckinErrors = errors => ({
  type: RECEIVE_CHECKIN_ERRORS,
  errors
});

export const fetchAllCheckins = () => dispatch => {
  return APIUtil.fetchAllCheckins()
    .then(checkins => dispatch(receiveAllCheckins(checkins)));
};

export const fetchOneCheckin = (checkinId) => dispatch => {
  return APIUtil.fetchOneCheckin(checkinId)
    .then(checkin => dispatch(receiveOneCheckin(checkin)));
};

export const createNewCheckin = checkin => dispatch => {
  return APIUtil.createNewCheckin(checkin)
    .then(newCheckin => dispatch(sendOneCheckin(newCheckin)),
    error => dispatch(receiveCheckinErrors(error.responseJSON)));
};

export const deleteCheckin = checkinId => dispatch => {
  return APIUtil.deleteCheckin(checkinId)
    .then(checkin => dispatch(deleteOneCheckin(checkin)));
};

export const updateCheckin = checkin => dispatch => {
  return APIUtil.editCheckin(checkin)
    .then(newCheckin => dispatch(updateOneCheckin(checkin)),
    error => dispatch(receiveCheckinErrors(error.responseJSON)));
};
