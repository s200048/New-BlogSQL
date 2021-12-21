import React, { useState } from "react";
import styled, { css } from "styled-components";
import Axios from "axios";

const Container = styled.div`
  height: 90vh;
`;
const PostWrapper = styled.div`
  margin: 0 8rem;
  padding: 2rem 3rem;
  background: grey;
`;
const PostBoxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputStyle = css`
  width: 38%;
  height: 50px;
  padding: 0 0.25rem;
  margin: 1rem;
`;

const Label = styled.label`
  color: white;
  font-size: 1.5rem;
  /* text-align: left; */
`;

const Input = styled.input.attrs({
  type: "text",
})`
  ${InputStyle}
`;
const Text = styled.textarea`
  margin: 1rem 0;
`;
const Button = styled.button`
  padding: 0.25rem 1rem;
`;

const CreatePost = () => {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  let clickHandler = async () => {
    try {
      await Axios.post("http://localhost:8000/api/create", {
        user: user,
        title: title,
        post: text,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(123);
  // let getHandler = async () => {
  //   try {
  //     const data = await Axios.get("http://localhost:8000/api/get");
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   // setSQLdata(data);
  // };
  // getHandler();

  // console.log(user);
  // console.log(text);

  return (
    <Container>
      <PostWrapper>
        <PostBoxes>
          <Label>Username :</Label>
          <Input
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          />
          <Label>Title :</Label>
          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label>Post Content : </Label>
          <Text
            placeholder="Please add some text here"
            rows="10"
            cols="39"
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit" onClick={clickHandler}>
            Submit
          </Button>
        </PostBoxes>
      </PostWrapper>
    </Container>
  );
};

export default CreatePost;
