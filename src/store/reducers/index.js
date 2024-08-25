import nftReducer from './nft';
import bookmarkReducer from './bookmark';
const {combineReducers} = require('@reduxjs/toolkit');

export const reducers = combineReducers({
  nft: nftReducer,
  bookmark: bookmarkReducer,
});
