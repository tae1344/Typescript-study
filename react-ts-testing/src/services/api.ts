import axios, { AxiosResponse } from "axios";

export async function fetchData(subreddit: string): Promise<any> {
  const data = await axios
    .get(`https://www.reddit.com/r/${subreddit}/top.json`)
    .then((res: AxiosResponse) => {
      // console.log("res :: ", res);
      return res.data.data;
    });

  return data;
}
