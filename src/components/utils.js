import { styled } from "@mui/material/styles";
import { Button, Link, Typography } from "@mui/material";

export const StyledLink = styled(Link)({
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    color: "#009966",
  },
  "&:focus": {
    color: "#009966",
  },
});

export const StyledFooterLink = styled(Link)({
  color: "#000000",
  fontSize: "1rem",
  textDecoration: "none",
  "&:hover": {
    fontWeight: "bold",
    paddingBottom: "0.15rem",
    borderBottom: "3px solid #ffbdd4",
    color: "#009966",
  },
  "&:focus": {
    fontWeight: "bold",
    paddingBottom: "0.15rem",
    borderBottom: "3px solid #ffbdd4",
    color: "#009966",
  },
});

export const StyledFooterLinkNoBold = styled(Link)({
  color: "black",
  textDecoration: "none",
  fontWeight: 100,
  "&:hover": {
    fontWeight: "bold",
    color: "#009966",
  },
  "&:focus": {
    fontWeight: "bold",
    color: "#009966",
  },
});

export const StyledParagraph = styled(Typography)({
  fontWeight: "100",
  paddingBottom: "",
  fontSize: {
    xs: "1rem",
    md: "1.4rem",
  },
  maxWidth: {
    xs: "80%",
    sm: "100%",
  },
  textAlign: {
    xs: "center",
    md: "left",
  },
});

export const StyledH2 = styled(Typography)({
  fontSize: {
    xs: "2.5rem",
    md: "3rem",
    lg: "3.5rem",
    xl: "4rem",
  },
});