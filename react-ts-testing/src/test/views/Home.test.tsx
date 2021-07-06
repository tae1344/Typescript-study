import { render } from "@testing-library/react";
import Home from "../../views/Home/Home";
import axios from "axios";
import React from "react";

describe("Test Home Component", () => {
  it("mock axios", async () => {
    //given
    const home = render(<Home />);
    axios.get = jest.fn().mockResolvedValue({
      data: {
        length: 25,
      },
    });

    const subreddit = "reactjs";
    await axios.get(`https://www.reddit.com/r/${subreddit}/top.json`);

    //when
    expect(await home.findByText(/number of top posts:/i)).toBeInTheDocument();
  });
});
