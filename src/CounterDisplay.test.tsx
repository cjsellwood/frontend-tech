import { render, screen } from "@testing-library/react";
import CounterDisplay from "./CounterDisplay";

describe("CounterDisplay component", () => {
  test("Should display count passed in as prop", () => {
    render(<CounterDisplay count={9} />);

    expect(screen.getByText("9")).toBeInTheDocument();
  });
});
