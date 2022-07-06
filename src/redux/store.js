import { configureStore } from "@reduxjs/toolkit";
import listData from "./listData/listData";

export default configureStore({
  reducer: {
    listData: listData,
  },
});

// slice haro inja jam mikone to hafezash gharar mideh
