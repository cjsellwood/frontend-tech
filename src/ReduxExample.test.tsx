import { fireEvent, render, screen } from "@testing-library/react";
import ReduxExample from "./ReduxExample";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./store/todoSlice";
import counterReducer from "./store/counterSlice";
import { RootState } from "./store/store";
import { ReactElement } from "react";

function renderer(element: ReactElement, preloadedState: RootState | {} = {}) {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
      todo: todoReducer,
    },
    preloadedState,
  });
  return render(<Provider store={store}>{element}</Provider>);
}

it("renders component", async () => {
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

  renderer(<ReduxExample />);

  const linkElement = screen.getByText(/increment/i);
  expect(linkElement).toBeInTheDocument();

  const id1 = await screen.findByText("1");
  expect(id1).toBeInTheDocument();

  const title1 = await screen.findByText(/delectus/i);
  expect(title1).toBeInTheDocument();
});

it("Changes from a cross to a tick when clicked and back when clicked again", async () => {
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

  renderer(<ReduxExample />);

  const todos = await screen.findAllByLabelText("complete todo");

  // Both todos should be incomplete
  expect(screen.queryAllByLabelText("undo todo").length).toBe(0);
  expect(screen.queryAllByLabelText("complete todo").length).toBe(2);

  // Click first todos complete button
  fireEvent.click(todos[0]);

  // One todo should be complete and the other not
  expect(screen.queryAllByLabelText("undo todo").length).toBe(1);
  expect(screen.queryAllByLabelText("complete todo").length).toBe(1);

  // Click undo and it will again be incomplete
  fireEvent.click(await screen.findByLabelText("undo todo"));
  expect(screen.queryAllByLabelText("undo todo").length).toBe(0);
  expect(screen.queryAllByLabelText("complete todo").length).toBe(2);
});

it("Increments counter on click", () => {
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

  renderer(<ReduxExample />);

  expect(screen.queryByText("0")).not.toBe(null);
  expect(screen.queryByText("1")).toBe(null);

  // Click increment button
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.queryByText("0")).toBe(null);
  expect(screen.queryByText("1")).not.toBe(null);

  // Click again
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText("2")).toBeInTheDocument();
});

it("Decrements counter on click", () => {
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

  renderer(<ReduxExample />);

  expect(screen.queryByText("0")).not.toBe(null);
  expect(screen.queryByText("-1")).toBe(null);

  // Click increment button
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.queryByText("0")).toBe(null);
  expect(screen.queryByText("-1")).not.toBe(null);

  // Click again
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByText("-2")).toBeInTheDocument();
});

export {};
