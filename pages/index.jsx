import styled from "styled-components";
import { Routes } from "@config/routes";
import { textFont } from "@styles/theme";
import Link from "next/link";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const Container = styled.div`
  width: 1280px;
  height: 80px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

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

const DashboardButton = styled.a`
  height: 44px;
  ${textFont("md", "medium")};
  padding: 10px 18px;
  color: #ffffff;
  background: #7f56d9;
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  line-height: 44px;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const IssuesPage = () => {
  return (
    <>
      <Header>
        <Container>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/logo-large.svg" alt="Prolog logo" />
          <nav>
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
          </nav>

          <Link href={Routes.projects} passHref>
            <DashboardButton>Open Dashboard</DashboardButton>
          </Link>
        </Container>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </>
  );
};

export default IssuesPage;
