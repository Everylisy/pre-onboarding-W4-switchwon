import styled from "@emotion/styled";
import type { ReactNode } from "react";

type IChildrenProps = {
  children: ReactNode;
};

const Layout = ({ children }: IChildrenProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  display: block;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

export const NavWrapper = styled.nav`
  height: 32px;
  display: flex;
  align-items: center;
  margin: 100px 0 16px;
  padding: 38px 30px;
  border-radius: 12px;
  background-color: white;
`;

export const NavContainer = styled.div`
  width: 460px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainWrapper = styled.main`
  margin-bottom: 16px;
  padding: 32px 30px;
  border-radius: 12px;
  background-color: white;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  padding: 22px 20px;
  border-radius: 12px;
  background-color: white;
`;
