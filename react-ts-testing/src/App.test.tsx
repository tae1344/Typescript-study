import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  test.each([[/how it works/i], [/about/i]])(
    "tests correctly go to %s page",
    (page) => {
      //given
      const link = screen.getByRole("link", { name: page });

      //when
      userEvent.click(link);

      //then
      // screen.debug(link);
      expect(screen.getByRole("heading", { name: page })).toBeInTheDocument();
    }
  );

  it("tests correctly go to home on click logo", () => {
    // given
    const link = screen.getByRole("link", { name: /로고/i });

    // when
    userEvent.click(link);

    // then
    expect(
      screen.getByRole("heading", { name: /Reddit에서 포스트 찾기/i })
    ).toBeInTheDocument();
    //screen.debug(link);
  });
});
