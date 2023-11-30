import { createSlice } from "@reduxjs/toolkit";

const initialState={

}
export const roomSlice=createSlice({
  name:"six-room",
  initialState,
  reducers:{
    createRoom(state,action){
      return{...state,room:action.payload}
    }
  }
})

export const {createRoom}=roomSlice.actions

export default roomSlice.reducer;