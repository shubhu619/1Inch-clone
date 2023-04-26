import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { navbarHeight } from "../constants/Contstants";
import useScrollPosition from "../hooks/useScrollPosition";
import navbarContent from "../utils/content";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
import LaunchButton from "./LaunchButton";
import MenuIcon from "@mui/icons-material/Menu";

const { Logo } = navbarContent;
const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.1}
    sx={{
      cursor: "pointer",
      color: "text.secondary",
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    {children}
  </Stack>
);
const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: navbarHeight,
        bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
      <Container sx={{
        [theme.breakpoints.up("lg")]:{
          maxWidth:"1380px!important",
          px:2
        }
     
      }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          {/* logo */}
          <img
            src={Logo}
            alt="1inch"
            style={{
              height: "100%",
              objectFit: "contain",
            }}
          />
          {/* links */}
          {!isMobile && (
            <Stack
              direction="row"
              spacing={5}
              justifyContent="center"
              alignItems="center"
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <LinkButton>
                <Typography variant="body2">Products</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>
              <LinkButton>
                <Typography variant="body2">developers</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>
              <LinkButton>
                <Typography variant="body2">Governence</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>
              <LinkButton>
                <Typography variant="body2">About</Typography>
                <KeyboardArrowDownIcon fontSize="small" />
              </LinkButton>
              <LinkButton spacing={0.5}>
                <Typography variant="body2">Blog</Typography>
                <CallMadeIcon
                  sx={{
                    fontSize: 12,
                  }}
                />
              </LinkButton>
            </Stack>
          )}
          {/* buttons */}
          {isMobile ? (
            <IconButton>
              <MenuIcon sx={{ color: "text.secondary" }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={5} alignItems="center">
              <LinkButton spacing={1}>
                <LanguageIcon fontSize="small" />
                <Typography variant="body2">EN</Typography>
              </LinkButton>
              <LaunchButton sx={{ borderRadius: 3 }} />
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
