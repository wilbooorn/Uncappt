import * as APIUtil from '../util/like_util';

export const CREATE_LIKE = "CREATE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

export const sendLike = like => ({
  type: CREATE_LIKE,
  like
});

export const removeLike = like => ({
  type: DELETE_LIKE,
  like
});

export const createLike = like => dispatch => {
  return APIUtil.createLike(like)
    .then(newLike => dispatch(sendLike(newLike)));
};

export const deleteLike = likeId => dispatch => {
  return APIUtil.deleteLike(likeId)
    .then(like => dispatch(removeLike(like)));
};
