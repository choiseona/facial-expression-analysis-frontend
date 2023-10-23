import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BackgroundVideo from "../../../components/Homepage/BackgroundVideo";

describe("Background component test", () => {
  test("비디오 요소에 src 속성이 있어야 합니다.", () => {
    render(<BackgroundVideo />);
    const videoElement = screen.getByTestId("background-video");
    expect(videoElement).toHaveAttribute("src");
  });
});
