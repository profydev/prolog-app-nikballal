import styled from "styled-components";
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
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/products" passHref>
            <NavLink>Products</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/documentation" passHref>
            <NavLink>Documentation</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/pricing" passHref>
            <NavLink>Pricing</NavLink>
          </Link>
        </NavItem>
      </NavItems>
    </div>
  );
};

export default Navbar;
