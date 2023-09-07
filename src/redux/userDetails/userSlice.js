import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    token:"",
    collectiveId:"",
    userId:"",
    name:"",
    image:"",
    email:""
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state,action) => {
      state.token = action.payload.token;
      state.collectiveId = action.payload.collectiveId;
    },
    setUserId: (state,action) => {
      state.userId = action.payload;
    },
    setUserImageName:(state,action) => {
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.email = action.payload.email;
    },
  },
});

export const { setUserDetails,setUserId ,setUserImageName} = userSlice.actions;



export default userSlice.reducer;
