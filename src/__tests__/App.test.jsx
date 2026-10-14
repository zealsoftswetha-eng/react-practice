import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Check heading", () => {
render(<App />);

const heading = screen.getByText("Welcome to React");

expect(heading).toBeInTheDocument();
});
