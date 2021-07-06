import React, { useState } from "react";
import { Container, Headline, Section, Status, TopPosts } from "./Home.style";
import Form from "../../components/Form/Form";
import { fetchData } from "../../services/api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");

  const onSearch = async (subreddit: string) => {
    setStatus("loading");
    const data = await fetchData(subreddit);
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

export default Home;
