import { Heading } from "@chakra-ui/react";

interface IHeaderProps {
  content: string;
}

const Header = (props: IHeaderProps) => {
  return (
    <Heading as="h1" size="lg" fontFamily="inherit" mb="14px">
      {props.content}
    </Heading>
  );
};

export default Header;
