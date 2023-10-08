import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';

export const login = createAsyncThunk(
  "users/login",
  async ({ email, password }) => {
    const response = await fetch(
      "https://koovs-backend.onrender.com/api/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    if (!response.ok) {
      const { msg } = await response.json();
      throw new Error(msg);
    }
    const { token } = await response.json();
    return { token, email };
  }
);

export const verifyUser = createAsyncThunk("users/verify", async (token) => {
  const response = await fetch(
    "https://koovs-backend.onrender.com/api/auth/get-user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    }
  );

  if (!response.ok) {
    const { msg } = await response.json();
    throw new Error(msg);
  }
  const { name, email } = await response.json();
  return { name, email };
});

let loadingToast;

const initialState = {
  name: "",
  isAuth: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem('koovsAuth')
      Cookies.remove('koovsAuth');
      localStorage.removeItem("koovsData");
      state.name = "";
      state.isAuth = false;
      state.username = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      toast.success("Login Successfully...", { id: loadingToast });
      state.isAuth = true;
      state.username = action.payload.email;
      Cookies.set('koovsAuth', action.payload.token, {expires: 7});
    }),
      builder.addCase(login.pending, () => {
        loadingToast = toast.loading("Loading...");
      }),
      builder.addCase(login.rejected, (state, action) => {
        toast.error(action.error.message, { id: loadingToast });
      });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
