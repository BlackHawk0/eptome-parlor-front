import React, { useContext } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FooterLogo from '../assets/13.png'


export const StyledFooterLink = styled(Link)({
    color: "#ffffff",
    fontSize: "1rem",
    textDecoration: "none",
    "&:hover": {
      fontWeight: "bold",
      paddingBottom: "0.15rem",
      borderBottom: "3px solid #ED806B",
    },
    "&:focus": {
      fontWeight: "bold",
      paddingBottom: "0.15rem",
      borderBottom: "3px solid #ED806B",
    },
  });
  const StyledFooterLinkNoBold = styled(Link)({
    color: '#ffffff',
    textDecoration: "none",
    fontWeight: 100,
    "&:hover": {
      fontWeight: "bold",
      paddingBottom: "0.15rem",
      borderBottom: "3px solid #ED806B",
    //   color: "#009966",
    },
    "&:focus": {
      fontWeight: "bold",
      paddingBottom: "0.15rem",
      borderBottom: "3px solid #ED806B",
    },
  });


// const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Footer() {
  return (
    <Container
      disableGutters
      maxWidth="fluid"
      fontFamily='font-family: "Rubik", sans-serif'
    >
      <Box
        // paddingX={{ xs: "1rem", lg: ".5rem" }}
        paddingTop={{ xs: "1rem", lg: "3rem" }}
        // paddingBottom={{ xs: "1rem", lg: "0.5rem" }}
        // marginLeft="1rem"
        backgroundColor = '#191919'
        color = '#ffffff'
      >
        <Grid
          container
          columns={{ xs: 3, md: 6, lg: 15, xl: 15 }}
          justify="center"
        >
          <Grid item xs={4} textAlign={{ md: "left" }}>
            <Box>
              <StyledFooterLinkNoBold
                 rel="noopener"
                href="https://goo.gl/maps/hF4WuLvVfVc3SzLH7"
                target={"_blank"}
              >
                  <img src={FooterLogo} />
                <Box color = '#ffffff'>However, you like to relax – poolside, with a massage,< br /> 
                manicure or hair styling session, or by sweating it out < br />  at the gym – Epitome Beauty Parlour has state-of-the-art < br />amenities  
                    to make your stay as rejuvenating as possible.</Box>
                <Box marginTop="1rem" marginBottom="0.35rem">
                <Typography >
                <Link
                  variant="body2"
                  color="inherit"
                  target="_blank"
                  href="#"
                  marginRight="0.8rem"
                >
                  <FacebookIcon
                    fontSize="large"
                    paddingX={{ sm: "1rem" }}
                    sx={{
                      color: "#ffffff",
                      "&:hover,&:focus": {
                        color: "#ED806B",
                      },
                    }}
                  />
                </Link>
                <Link
                  variant="body2"
                  color="inherit"
                  target="_blank"
                  href="https://www.linkedin.com/company/epitome-beauty/"
                  marginRight="0.8rem"
                >
                  <Link variant="body2" color="inherit" edInIcon />
                  <LinkedInIcon
                    fontSize="large"
                    paddingX={{ sm: "1rem" }}
                    sx={{
                      color: "#ffffff",
                      "&:hover,&:focus": {
                        color: "#ED806B",
                      },
                    }}
                  />
                </Link>
                <Link
                  variant="body2"
                  color="inherit"
                  target="_blank"
                  href="https://www.youtube.com/channel/UC8LKCBrdIPGWSYTiMBTByhw"
                  marginRight="0.8rem"
                >
                  <YouTubeIcon
                    fontSize="large"
                    paddingX={{ sm: "1rem" }}
                    sx={{
                      color: "#ffffff",
                      "&:hover,&:focus": {
                        color: "#ED806B",
                      },
                    }}
                  />
                </Link>
                <Link
                  variant="body2"
                  color="inherit"
                  target="_blank"
                  href="#"
                  marginRight="0.8rem"
                >
                  <TwitterIcon
                    fontSize="large"
                    paddingX={{ sm: "1rem" }}
                    sx={{
                      color: "#ffffff",
                      "&:hover,&:focus": {
                        color: "#ED806B",
                      },
                    }}
                  />
                </Link>
                <Link variant="body2" color="inherit" target="_blank" href="#">
                  <InstagramIcon
                    fontSize="large"
                    paddingX={{ sm: "1rem" }}
                    sx={{
                      color: "#ffffff",
                      "&:hover,&:focus": {
                        color: "#ED806B",
                      },
                    }}
                  />
                </Link>
              </Typography>
                </Box>
              </StyledFooterLinkNoBold>
            </Box>
            
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography
                variant={"h5"}
                fontWeight="bold"
                marginBottom="0.35rem"
              >
                Recent Post
              </Typography>
              <Box>
                <Typography>
                  <StyledFooterLink
                    variant="body2"
                    rel="noopener"
                    href="/about"
                  >
                    About Us
                  </StyledFooterLink>
                </Typography>
                <Typography>
                  <StyledFooterLink variant="body2" href="/faq">
                    FAQ
                  </StyledFooterLink>
                </Typography>
                <Typography>
                  <StyledFooterLink
                    variant="body2"
                    // href="/career"
                    target={"_blank"}
                  >
                    Career
                  </StyledFooterLink>
                </Typography>
                <Typography>
                  <StyledFooterLink
                    variant="body2"
                    // href="/our-team"
                    target={"_blank"}
                  >
                    Our Team
                  </StyledFooterLink>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} textAlign={{ md: "left" }}>
            <Box>
              <Typography
                variant={"h5"}
                fontWeight="bold"
                marginBottom="0.35rem"
              >
                Working Hours
              </Typography>
              <Box>
                <Typography
                >
                  <StyledFooterLink variant="body2">
                  Monday – Friday: 8am – 6pm EST
                  </StyledFooterLink>
                </Typography>
                <Typography>
                  <StyledFooterLink
                    variant="body2"
                  >
                    Saturday: 9am – 5pm EST
                  </StyledFooterLink>
                </Typography>
                <Typography>
                  <StyledFooterLink
                    variant="body2">
                    Sunday: 9am – 4pm EST
                  </StyledFooterLink>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} textAlign={{ md: "left" }}>
            <Box>
              <Typography
                variant={"h5"}
                fontWeight="bold"
                marginBottom="0.35rem"
              >
                Contact Us
              </Typography>
              <Typography>
              
                <StyledFooterLinkNoBold
                    rel="noopener"
                    href="https://goo.gl/maps/F4s7XQMRnf6MPakw5"
                    target={"_blank"}
                >
                    <Box>Address Lenana Road, </Box>
                    <Box>711 Lenana, Nairobi</Box>
                </StyledFooterLinkNoBold>
              </Typography>
              <Typography>
                  <StyledFooterLink variant="body2" href="tel: +254716212865">
                  +254716212865
                  </StyledFooterLink>
                </Typography>
                <Typography >
                  <StyledFooterLink
                    variant="body2"
                    href="mailto: bookings@epitomeparlour.co.ke"
                  >
                   bookings@epitomeparlour.co.ke
                  </StyledFooterLink>
                </Typography>        
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid
          container
          columns={{ xs: 3, md: 6, lg: 15, xl: 15 }}
          justify="center"
          sx={{backgroundColor: '#2D2D2D', color: '#ffffff'}}
        >
      <Grid item xs={6} textAlign={{ md: "left" }}>
        <Box>
            <Typography 
            textAlign={{ xs: "left", md: "left" }}
            paddingX={{ xs: "1rem", lg: 0 }}
            >
            &copy; Copyright Epitome Beauty Parlour All rights reserved.
            </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} textAlign={{ md: "left" }}>
        <Box>
        <Typography           
                textAlign={{ xs: "right", md: "right" }}
                paddingX={{ xs: "1rem", lg: 0 }}
                href="./privacy-policy">
                Privacy Policy
          </Typography>
        </Box>
      </Grid>
    
      <Grid item xs={3} textAlign={{ md: "left" }}>
        <Box>
        <Typography           
                textAlign={{ xs: "right", md: "right" }}
                paddingX={{ xs: "0rem", lg: 0 }} 
                href="./terms-of-use"
                >
                Terms of Service
          </Typography>
        </Box>
      </Grid>
      </Grid>

    </Container>
  );
}