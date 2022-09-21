import styled from "styled-components";
import { Routes } from "@config/routes";
import Link from "next/link";

const NavItems = styled.ul`
  display: flex;
  list-style: none;
`;
const NavItem = styled.li`
  padding: 0 16px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #667085;
`;

const Navbar = () => {
  return (
    <div>
      <NavItems>
        <NavItem>
          <Link href={Routes.home} passHref>
            <NavLink>Home</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href={Routes.products} passHref>
            <NavLink>Products</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href={Routes.documentation} passHref>
            <NavLink>Documentation</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href={Routes.pricing} passHref>
            <NavLink>Pricing</NavLink>
          </Link>
        </NavItem>
      </NavItems>
    </div>
  );
};

export default Navbar;
