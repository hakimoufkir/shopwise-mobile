import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  userRedux: null,
  userReduxLoading: false,
  sortData: 'All'
}   

export const userSlice = createSlice({
  name: 'userRedux',
  initialState,
  reducers: {
        setUserRedux: (state, action) => {
            state.userRedux = action.payload;
        },
        setUserReduxLoading: (state, action) => {
            state.userReduxLoading = action.payload;
        },
        setSortData: (state, action) => {
            state.sortData = action.payload;
        },
  },
})

// Action creators are generated for each case reducer function
export const { setUserRedux, setUserReduxLoading, setSortData } = userSlice.actions

export default userSlice.reducer