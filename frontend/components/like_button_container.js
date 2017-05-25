import {connect} from 'react-redux';
import {createLike, deleteLike} from '../actions/like_actions';
import LikeButton from './like_button';

const mapDispatchToProps = dispatch => ({
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like))
});

export default connect(
  null,
  mapDispatchToProps
)(LikeButton);
