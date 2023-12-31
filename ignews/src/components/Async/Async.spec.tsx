import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  it("Async button render corretly", async () => {
    render(<Async />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();

    // expect(await waitForElementToBeRemoved(screen.queryByText('Button')));

    await waitFor(() => {
      return expect(screen.queryByText("Button")).not.toBeInTheDocument();
    });
  });
});
