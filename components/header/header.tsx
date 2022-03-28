import styled from "styled-components";

const Header = styled.header((props) => ({
  display: "flex",

  alignItems: "center",
  justifyContent: "center",

  height: "4rem",
  width: "100%",

  backgroundColor: props.theme.palette.primary.main,
}));

export default Header;
