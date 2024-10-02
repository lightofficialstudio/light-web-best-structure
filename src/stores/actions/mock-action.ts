import { createAsyncThunk } from "@reduxjs/toolkit";
import { callBackendAPI } from "@services/api-gateway";
import { UserState } from "@stores/type";

// สร้าง async action สำหรับส่งข้อมูลผู้ใช้ไปยัง API
export const submitUser = createAsyncThunk(
  "user/submitUser",
  async (userData: UserState) => {
    const response = await callBackendAPI("POST", "api/user", userData);
    return response; // ไม่ต้องใช้ response.data เพราะ callBackendAPI ส่ง response.data อยู่แล้ว
  }
);

// สร้าง async action สำหรับดึงข้อมูลผู้ใช้จาก API
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await callBackendAPI("GET", "api/user");
  return response;
});
