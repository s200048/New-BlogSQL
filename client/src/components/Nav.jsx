import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreatePost from "./CreatePost";
import Home from "./Home";

const Container = styled.div`
  height: 10vh;
  background: #86b9c2;
`;
const NavWrapper = styled.div`
  text-align: center;
  padding: 1.5rem;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.5rem;
  cursor: pointer;
`;

const Nav = () => {
  return (
    <Container>
      <NavWrapper>
        <NavLink as={Link} to="/">
          Home
        </NavLink>
        <NavLink as={Link} to="/createpost">
          CreatePost
        </NavLink>
      </NavWrapper>
    </Container>
  );
};

export default Nav;
