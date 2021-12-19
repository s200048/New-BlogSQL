import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
`;
const HomeWrapper = styled.div`
  margin: 0 8rem;
  padding: 2rem 3rem;
  background: grey;
`;
const PostBoxes = styled.div`
  background: greenyellow;
  padding: 2rem 2rem;
`;

const Home = () => {
  return (
    <Container>
      <HomeWrapper>
        <PostBoxes>
          <h1>This is Main</h1>
        </PostBoxes>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
