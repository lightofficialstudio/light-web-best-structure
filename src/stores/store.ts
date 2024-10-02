import { configureStore } from "@reduxjs/toolkit";
// #region : reducer
import mockReducer from "@stores/reducers/mock-reducer";
// #endregion

export const store = configureStore({
  reducer: {
    mockReducer: mockReducer,
  },
});

// ? : อธิบาย : store และ configureStore ใน redux toolkit
export type RootState = ReturnType<typeof store.getState>;
// ? : อธิบาย : AppDispatch ใน redux toolkit
export type AppDispatch = typeof store.dispatch;
