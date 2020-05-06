import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavListItem = styled.li`
  padding: 20px 50px;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 400;
  transition: color ease-in 0.3s;
  :hover {
    color: #feb59d;
  }
  :active {
    color: #feb59d;
  }
  cursor: pointer;
`;

const Nav: React.FC = () => (
  <header>
    <NavList>
      <NavListItem>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
      </NavListItem>
      <NavListItem>
        <Link href="/posts/new">
          <NavLink>New post</NavLink>
        </Link>
      </NavListItem>
    </NavList>
  </header>
);

export default Nav;
