import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  /* width: 50%; */
  max-width: 70%;
  padding: 0px 2rem;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  background: grey;
  box-shadow: 1px 1px 8px black;
`;
const PostBoxes = styled.div`
  background: greenyellow;
  padding: 2rem 2rem;
  width: 100%;
  margin-top: 20px;
  max-height: 400px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  line-height: 3rem;
  /* overflow: hidden; */

  p {
    font-size: 1.5rem;
  }
`;

const Home = () => {
  let [SQLdata, setSQLdata] = useState([]);
  let [like, setLike] = useState(0);
  let [count, setCount] = useState(0);
  let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:8000/api/get").then((data) => {
      // console.log(data);
      setSQLdata(data.data);
      // setLike(data.data.likes);
    });
  }, []);

  let likeHandler = (id) => {
    axios.post(`http://localhost:8000/api/like/${id}`).then((data) => {
      alert(`You have been liked the post ${id}`);
      // console.log(data);
      // setLike((prevLike) => prevLike + 1);
      axios.get("http://localhost:8000/api/get").then((data) => {
        setSQLdata(data.data);
      });
    });
    // for (let i = 0; i < SQLdata.length; i++) {
    //   if (SQLdata[i].id === id) {
    //     setLike(SQLdata[i].likes);
    //   }
    // }
  };

  // useEffect(() => {
  //   // console.log(like);
  //   // hello();
  //   likeHandler();
  // }, [like]);

  // let hello = () => {
  //   console.log("hello");
  // };

  console.log(SQLdata);
  console.log(like);

  let clickHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      <HomeWrapper>
        {SQLdata.map((items, index) => (
          <PostBoxes>
            <h1>{items.title}</h1>
            {/* <p>{items.id}</p> */}
            <p>{items.user_name}</p>
            <p>
              {items.post_text.length > 500
                ? items.post_text.substring(0, 200) + "..."
                : items.post_text}
            </p>
            <p>{items.likes}</p>
            <button
              onClick={() => {
                likeHandler(items.id);
              }}
            >
              Likes
            </button>
            <button
              onClick={() => {
                history.push(`/post/${items.id}`);
              }}
            >
              Click for more
            </button>
          </PostBoxes>
        ))}
      </HomeWrapper>
      {like}
      {count}
      <button onClick={clickHandler}>Click</button>
    </Container>
  );
};

export default Home;
