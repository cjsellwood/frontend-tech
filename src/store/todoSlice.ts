import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  completed: boolean;
  id: number;
  userId: number;
  title: string;
}

export interface TodoState {
  data: Todo[];
  status: string;
  error: string;
}

const initialState: TodoState = {
  data: [],
  status: "",
  error: "",
};

export const fetchTodo = createAsyncThunk(
  "todo/fetchTodo",
  async (todos, { rejectWithValue }) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      console.log(res);
      if (res.status !== 200) {
        throw new Error("Not fetched");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      let error = err as Error;
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    completeTodo: (state, action: PayloadAction<number>) => {
      state.data[action.payload].completed = true;
    },
    undoTodo: (state, action: PayloadAction<number>) => {
      state.data[action.payload].completed = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodo.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        console.log(action);
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = action.error.message as string;
        }
      });
  },
});

export const { completeTodo, undoTodo } = todoSlice.actions;

export default todoSlice.reducer;
