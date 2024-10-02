import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const backendUrl = process.env.BACKEND_API_URL || "http://localhost:3000";

// ฟังก์ชันกลางที่ใช้เรียก API

export const callBackendAPI = async (
  method: string,
  endpoint: string,
  data?: any,
  extendHeader?: any
) => {
  const url = `${backendUrl}/${endpoint}`;

  const headers = {
    ...extendHeader,
    Authorization: `Bearer ${process.env.API_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    let response;
    switch (method.toUpperCase()) {
      case "GET":
        response = await axios.get(url, { headers });
        break;
      case "POST":
        response = await axios.post(url, data, { headers });
        break;
      case "PUT":
        response = await axios.put(url, data, { headers });
        break;
      case "DELETE":
        response = await axios.delete(url, { headers });
        break;
      default:
        throw new Error("Unsupported HTTP method");
    }

    return response.data; // ส่งข้อมูลกลับจาก API
  } catch (error: any) {
    console.error(error.message);
    throw new Error("Failed to call backend API");
  }
};
