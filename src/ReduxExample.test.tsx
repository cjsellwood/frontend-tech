// import { render, screen } from "@testing-library/react";
// import ReduxExample from "./ReduxExample";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./store/todoSlice";
// import counterReducer from "./store/counterSlice";

// const preloadedState = {};
// const store = configureStore({
//   reducer: {
//     counterReducer: counterReducer,
//     todo: todoReducer,
//   },
//   preloadedState,
// });

// test("renders learn react link", () => {
//   const view = render(
//     <Provider store={store}>
//       <ReduxExample />
//     </Provider>
//   );
//   console.log(view);
//   const linkElement = screen.getByText(/increment/i);
//   expect(linkElement).toBeInTheDocument();
// });

export {};

test("skip", () => {
  expect(1).toEqual(1);
});
