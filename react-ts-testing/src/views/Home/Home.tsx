import React, { useState } from "react";
import { Section, Headline, Status, TopPosts, Container } from "./Home.style";
import axios, { AxiosResponse } from "axios";
import Form from "../../components/Form/Form";

const MyComponent = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");

  const onSearch = async (subreddit: string) => {
    setStatus("loading");
    const data = await axios
      .get(`https://www.reddit.com/r/${subreddit}/top.json`)
      .then((res: AxiosResponse) => {
        console.log("res :: ", res);
        return res.data.data;
      });
    setPosts(data.children);
    setStatus("resolved");
  };
  return (
    <Container>
      <Section>
        <Headline>Reddit에서 포스트 찾기</Headline>
        <Form onSearch={onSearch} />
      </Section>
      {status === "loading" && <Status>로딩 중...</Status>}
      {status === "resolved" && (
        <TopPosts>Number of top posts: {posts.length}</TopPosts>
      )}
    </Container>
  );
};

export default MyComponent;
