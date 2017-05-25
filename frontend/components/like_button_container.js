import {connect} from 'react-redux';
import {createLike, deleteLike} from '../actions/like_actions';
import LikeButton from './like_button';

const mapStateToProps = state => ({
  isLiked: state.likeInfo.likes
});

const mapDispatchToProps = dispatch => ({
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
