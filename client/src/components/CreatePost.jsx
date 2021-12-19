import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const PostWrapper = styled.div``;
const PostBoxes = styled.div``;
const Input = styled.input``;
const Text = styled.textarea``;

const CreatePost = () => {
  return (
    <Container>
      <PostWrapper>
        <PostBoxes>
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Title" />
          <Text placeholder="Please add some text here" />
          <Input type="submit" placeholder="Submit" />
        </PostBoxes>
      </PostWrapper>
    </Container>
  );
};

export default CreatePost;
