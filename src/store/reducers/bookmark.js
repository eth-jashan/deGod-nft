import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  bookmarkList: [],
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: initialState, // This is the initial state of the slice
  reducers: {
    addToBookMark: (state, action) => {
      const copyOfList = state.bookmarkList;
      copyOfList.push(action.payload);
      state.bookmarkList = copyOfList;
    },
    removeFromBookMark: (state, action) => {
      console.log('removeFromBookMark', action.payload);
      state.bookmarkList = state.bookmarkList.filter(
        x => x.nft_data?.token_id !== action.payload,
      );
    },
  },
});

export const bookmarkActions = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
