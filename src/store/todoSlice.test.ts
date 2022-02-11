import { configureStore } from "@reduxjs/toolkit";
import { fetchTodo } from "./todoSlice";
import todoReducer from "./todoSlice";

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
});
