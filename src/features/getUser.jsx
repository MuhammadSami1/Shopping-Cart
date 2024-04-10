import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

const URL = "https://the-mexican-food-db.p.rapidapi.com";
export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "69a96717damsh10aee75fcacf293p124fc8jsneba347b44cee",
        "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
      },
    });
    try {
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getUser = createSlice({
  name: "getUser",
  initialState: {
    loading: false,
    users: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAction(showUser.pending), (state) => {
        state.loading = true;
      })
      .addCase(createAction(showUser.fulfilled), (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(createAction(showUser.rejected), (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export default getUser.reducer;
