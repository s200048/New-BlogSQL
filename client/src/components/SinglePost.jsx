import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  /* height: 90vh; */
  display: flex;
  justify-content: center;
  height: calc(100vh - 80px);
`;
const HomeWrapper = styled.div`
  /* margin: 0 8rem;
  padding: 2rem 3rem; */
  height: 100vh;
  width: 50%;
  max-width: 50%;
  padding: 30px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  background: grey;
  box-shadow: 1px 1px 8px black;
`;

const PostBoxes = styled.div`
  background: greenyellow;
  /* padding: 2rem 2rem; */
  width: 100%;
  margin-top: 20px;
  max-height: 400px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  overflow: hidden;

  p {
    font-size: 1.5rem;
  }
`;

export default function SinglePost() {
  const [SQLdata, setSQLData] = useState([]);
  let { postId } = useParams();
  let history = useHistory();
  //   console.log(postId);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/get/${postId}`).then((data) => {
      console.log(data);
      setSQLData(data.data);
    });
  }, []);

  //   console.log(SQLdata);

  return (
    <Container>
      <HomeWrapper>
        {SQLdata.map((items, index) => (
          <PostBoxes>
            <h1>{items.title}</h1>
            <p>{items.user_name}</p>
            <p>{items.post_text}</p>
            <button
              onClick={() => {
                history.push(`/`);
              }}
            >
              Back
            </button>
          </PostBoxes>
        ))}
      </HomeWrapper>
    </Container>
  );
}
