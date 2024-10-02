// reducers/userReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "@stores/type";
import { submitUser, fetchUser } from "@stores/actions/mock-action";

const initialState: UserState = {
  draftValues: {
    firstName: "first-name",
    lastName: "last-name",
    email: "e-mail",
  },
  loading: false,
  error: "",
  success: "",
};

const mockupReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDraftValues: (
      state,
      action: PayloadAction<{
        firstName?: string;
        lastName?: string;
        email?: string;
      }>
    ) => {
      state.draftValues = {
        ...state.draftValues,
        ...action.payload, // อัปเดตเฉพาะคีย์ที่ส่งเข้ามา
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitUser.fulfilled, (state) => {
        state.loading = false;
        state.success = "User submitted successfully";
      })
      .addCase(submitUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An unknown error occurred";
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.draftValues = {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
        };
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An unknown error occurred";
      });
  },
});

export const { setDraftValues } = mockupReducer.actions;
export default mockupReducer.reducer;
