import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Home from "./views/Home/Home";
import * as API from "./services/api";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

function setUp() {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

describe("Header", () => {
  beforeEach(() => {
    setUp();
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

describe("Subreddit Form", () => {
  beforeEach(() => {
    setUp();
  });

  it("test", async () => {
    jest.mock("axios");
    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { data: { children: [1, 2, 3, 4, 5] } } });

    const subredditInput = screen.getByLabelText("검색");
    const submitButton = screen.getByRole("button", { name: /search/i });

    userEvent.type(subredditInput, "reactjs");
    userEvent.click(submitButton);

    const loadingMessage = screen.getByText(/로딩 중/i);
    expect(loadingMessage).toBeInTheDocument();

    const numberOfTopPosts = await screen.findByText(/number of top posts:/i);
    expect(
      await screen.findByText(/number of top posts: 5/i)
    ).toBeInTheDocument();
    screen.debug(numberOfTopPosts);
  });
});
