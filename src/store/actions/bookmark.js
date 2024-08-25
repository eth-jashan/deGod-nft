import {bookmarkActions} from '../reducers/bookmark';

export const addToBookmark = nftInfo => {
  return dispatch => {
    dispatch(bookmarkActions.addToBookMark(nftInfo));
  };
};
export const removeFromBookmark = id => {
  return async dispatch => {
    dispatch(bookmarkActions.removeFromBookMark(id));
  };
};
