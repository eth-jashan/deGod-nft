import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: [],
  page: 0,
  isLoading: false,
};

export const nftSlice = createSlice({
  name: 'nft',
  initialState: initialState, // This is the initial state of the slice
  reducers: {
    setList: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
    setPageNumber: (state, action) => {
      state.page = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const nftActions = nftSlice.actions;

export default nftSlice.reducer;
