import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listData: [],
};

const listSlice = createSlice({
  name: "listData",
  initialState,
  reducers: {
    submitData: (state, action) => {
      const date = new Date();
      const { awake, sleep } = action.payload;
      const awakeTime = date.setHours(awake.split(":")[0], awake.split(":")[1]);
      const sleepTime = date.setHours(sleep.split(":")[0], sleep.split(":")[1]);
      const diffrence = awakeTime - sleepTime;
      const id = state.listData.length + 1;
      const tarikh = date.toLocaleDateString("fa");

      state.listData = [
        ...state,
        {
          awakeTime: awake,
          sleepTime: sleep,
          duration: diffrence,
          id,
          tarikh,
        },
      ];
    },
  },
});

export const { submitData } = listSlice.actions;

export default listSlice.reducer;
