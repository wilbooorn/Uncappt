export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
export const RECEIVE_ONE_CHECKIN = "RECEIVE_ONE_CHECKIN";
import * as APIUtil from '../util/checkin_util';

export const receiveAllCheckins = checkins =>({
  type: RECEIVE_ALL_CHECKINS,
  checkins
});

export const receiveOneCheckin = checkin => ({
  type: RECEIVE_ONE_CHECKIN,
  checkin
});

export const fetchAllCheckins = () => dispatch => {
  return APIUtil.fetchAllCheckins()
    .then(checkins => dispatch(receiveAllCheckins(checkins)));
};

export const fetchOneCheckin = (checkinId) => dispatch => {
  return APIUtil.fetchOneCheckin(checkinId)
    .then(checkin => dispatch(receiveOneCheckin(checkin)));
};
