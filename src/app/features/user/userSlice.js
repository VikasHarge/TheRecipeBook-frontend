import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  isAuthenticated: false,
  userData: null,
  error: "",
};

//Login Function
export const login = createAsyncThunk(
  "userData/login",
  async (loginDetails) => {
    const { loginEmail, loginPassword } = loginDetails;

    const res = await axios.post(
      "https://therecipebookbe.onrender.com/user/login",
      { email: loginEmail, password: loginPassword },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    return res.data;
  }
);

//Register Function
export const registerUser = createAsyncThunk(
  "userData/register",
  async ({ name, email, password }) => {
    console.log(name, email, password);
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      "https://therecipebookbe.onrender.com/user/register",
      { name, email, password },
      config
    );

    return data;
  }
);

//Logout Function
export const logout = createAsyncThunk("userData/logout", async () => {
  const { data } = await axios.get("https://therecipebookbe.onrender.com/user/logout", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
  });
  return data;
});

//loadUser function
export const loadUser = createAsyncThunk("LOAD_USER", async () => {
  const { data } = await axios.get("https://therecipebookbe.onrender.com/user/me", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return data;
});

//Save Recipe FUnction

export const saveRecipe = createAsyncThunk(
  "SAVE_RECIPE",
  async ({ recipeName, recipeImage, recipeId }) => {
    const { data } = await axios.post("https://therecipebookbe.onrender.com/user/saveRecipe",
      { recipeName, recipeImage, recipeId },
     {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return data
  }
);

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    clearError(state, action) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userData = null;
      state.error = action.error;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.error = "";
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userData = null;
      state.error = action.error.message;
    });
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isAuthenticated = false;
      state.error = "";
      state.loading = false;
      state.userData = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(loadUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.error = "";
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(saveRecipe.pending, (state, action)=>{
      
    })
    builder.addCase(saveRecipe.fulfilled, (state, action)=>{
      toast.success("Recipe Added Sucessfully");
    })
    builder.addCase(saveRecipe.rejected, (state, action)=>{
      toast.error("Failed to save recipe, please try again")
    })
  },
});

export const { clearError } = userSlice.actions;

export default userSlice.reducer;
