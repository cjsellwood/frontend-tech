import { configureStore } from "@reduxjs/toolkit";
import { fetchTodo } from "./todoSlice";
import todoReducer from "./todoSlice";
import { completeTodo, undoTodo } from "./todoSlice";

const originalFetch = window.fetch;
let store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

describe("Todo redux test", () => {
  beforeEach(() => {
    window.fetch = originalFetch;
    store = configureStore({
      reducer: {
        todo: todoReducer,
      },
    });
  });

  it("Should initially be empty of data, idle and no error", () => {
    const state = store.getState();
    expect(state.todo).toEqual({ data: [], error: null, status: "idle" });
  });

  it("Should set status to loading while fetching", () => {
    const initialState = { data: [], status: "idle", error: null };
    const pendingAction = { type: fetchTodo.pending };
    const state = todoReducer(initialState, pendingAction);
    expect(state).toEqual({ data: [], status: "loading", error: null });
  });

  it("Should set data once fulfilled", () => {
    const initialState = { data: [], status: "idle", error: null };
    const fulfilledAction = {
      type: fetchTodo.fulfilled,
      payload: [
        { userId: 1, id: 1, title: "delectus aut autem", completed: false },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
      ],
    };
    const state = todoReducer(initialState, fulfilledAction);
    expect(state).toEqual({
      data: [
        { userId: 1, id: 1, title: "delectus aut autem", completed: false },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
      ],
      status: "idle",
      error: null,
    });
  });

  it("Should set error if thrown", () => {
    const initialState = { data: [], status: "idle", error: null };
    const rejectedAction = {
      type: fetchTodo.rejected,
      payload: "Not fetched",
    };
    const state = todoReducer(initialState, rejectedAction);
    expect(state).toEqual({ data: [], status: "idle", error: "Not fetched" });
  });

  it("Should set error if not thrown not by rejectWithValue", () => {
    const initialState = { data: [], status: "idle", error: null };
    const rejectedAction = {
      type: fetchTodo.rejected,
      error: { message: "Not fetched" },
    };
    const state = todoReducer(initialState, rejectedAction);
    expect(state).toEqual({ data: [], status: "idle", error: "Not fetched" });
  });

  it("Should be able to fetch todos and add to state", async () => {
    const returnedTodos = [
      { userId: 1, id: 1, title: "delectus aut autem", completed: false },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
    ];
    window.fetch = jest.fn().mockReturnValue({
      status: 200,
      json: () => Promise.resolve(returnedTodos),
    });

    const result = await store.dispatch(fetchTodo());
    expect(result.type).toBe("todo/fetchTodo/fulfilled");
    expect(result.payload[0].userId).toEqual(1);
    expect(result.payload[0].completed).toEqual(false);

    const state = store.getState().todo;
    expect(state.data).toEqual(returnedTodos);
    expect(state.error).toBe(null);
    expect(state.status).toBe("idle");
  });

  it("Should return error if todos could not be fetched", async () => {
    window.fetch = jest.fn().mockReturnValue({
      status: 400,
    });

    const result = await store.dispatch(fetchTodo());
    expect(result.type).toBe("todo/fetchTodo/rejected");
    expect(result.payload).toBe("Not fetched");

    const state = store.getState().todo;
    expect(state.data).toEqual([]);
    expect(state.error).toBe("Not fetched");
    expect(state.status).toBe("idle");
  });

  it("Should set todo completed to true", () => {
    const initialState = {
      data: [
        { userId: 1, id: 1, title: "delectus aut autem", completed: false },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
      ],
      status: "idle",
      error: null,
    };
    const state = todoReducer(initialState, completeTodo(1));
    expect(state.data).toEqual([
      { userId: 1, id: 1, title: "delectus aut autem", completed: false },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: true,
      },
    ]);
  });

  it("Should set todo completed to false", () => {
    const initialState = {
      data: [
        { userId: 1, id: 1, title: "delectus aut autem", completed: false },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: true,
        },
      ],
      status: "idle",
      error: null,
    };
    // const completeAction = { type: "completeTodo", payload: 1 };
    const state = todoReducer(initialState, undoTodo(1));
    expect(state.data).toEqual([
      { userId: 1, id: 1, title: "delectus aut autem", completed: false },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
    ]);
  });

  it("Should set todo completed to true using store", async () => {
    store = configureStore({
      reducer: {
        todo: todoReducer,
      },
      preloadedState: {
        todo: {
          data: [
            { userId: 1, id: 1, title: "delectus aut autem", completed: false },
            {
              userId: 1,
              id: 2,
              title: "quis ut nam facilis et officia qui",
              completed: false,
            },
          ],
          error: null,
          status: "idle",
        },
      },
    });
    store.getState();
    const result = await store.dispatch(completeTodo(1));
    expect(result.type).toBe("todo/completeTodo");
    expect(result.payload).toBe(1);

    expect(store.getState().todo).toEqual({
      data: [
        { userId: 1, id: 1, title: "delectus aut autem", completed: false },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: true,
        },
      ],
      error: null,
      status: "idle",
    });
  });

  it("Should set todo completed to false using store", async () => {
    store = configureStore({
      reducer: {
        todo: todoReducer,
      },
      preloadedState: {
        todo: {
          data: [
            { userId: 1, id: 1, title: "delectus aut autem", completed: false },
            {
              userId: 1,
              id: 2,
              title: "quis ut nam facilis et officia qui",
              completed: true,
            },
          ],
          error: null,
          status: "idle",
        },
      },
    });
    store.getState();
    const result = await store.dispatch(undoTodo(1));
    expect(result.type).toBe("todo/undoTodo");
    expect(result.payload).toBe(1);

    expect(store.getState().todo).toEqual({
      data: [
        { userId: 1, id: 1, title: "delectus aut autem", completed: false },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
      ],
      error: null,
      status: "idle",
    });
  });
});
