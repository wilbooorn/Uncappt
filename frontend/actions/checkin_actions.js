export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
import * as APIUtil from '../util/checkin_util';

export const receiveAllCheckins = checkins =>({
  type: RECEIVE_ALL_CHECKINS,
  checkins
});


export const fetchAllCheckins = dispatch => {
  return APIUtil.fetchAllCheckins()
    .then(checkins => dispatch(receiveAllCheckins(checkins)));
};
