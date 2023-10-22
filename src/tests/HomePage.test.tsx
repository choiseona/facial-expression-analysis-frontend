import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";

describe("app test", () => {
  test("jest title 테스트", () => {
    render(<HomePage />);

    const titleText = screen.getByTestId("title-text");
    expect(titleText).not.toBeNull();
  });
});
