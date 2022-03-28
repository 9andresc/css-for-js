import styled from "styled-components";

const Header = styled.header((props) => ({
  display: "flex",

  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",

  minHeight: "4rem",
  width: "100%",

  backgroundColor: props.theme.colors.primary,
}));

export default Header;
