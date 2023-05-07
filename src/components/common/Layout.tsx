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
  max-width: 1060px;
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  height: 32px;
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
  margin-bottom: 6vh;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
