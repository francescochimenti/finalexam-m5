import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearch } from "../../reducers/booksReducer";
import { toggleTheme } from "../../reducers/themeReducer";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Grid,
  TextField,
  Menu,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";

import {Link} from "react-router-dom"

const MyNavbar = () => {
  const dispatch = useDispatch();

  const themeMode = useSelector((state) => state.theme);

  const currentCategory = useSelector((state) => state.books.setCategory);

  const handleSearchChange = (event) => {
    dispatch(setSearch(event.target.value));
  };

  const handleChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={1} sm={1} md={1}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/">HOME</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/">BROWSE</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/">ABOUT</Link>
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={1} sm={1} md={1}>
              <IconButton
                color="inherit"
                onClick={() => dispatch(toggleTheme())}
              >
                {themeMode === "light" ? (
                  <Brightness4Icon />
                ) : (
                  <Brightness7Icon />
                )}
              </IconButton>
            </Grid>
            <Grid item xs={5} sm={3} md={3}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, textAlign: "left" }}
              >
                My Bookstore
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                fullWidth
                placeholder="Search books"
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={1}>
              <FormControl fullWidth>
                <Select
                  value={currentCategory}
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem value="history">History</MenuItem>
                  <MenuItem value="fantasy">Fantasy</MenuItem>
                  <MenuItem value="horror">Horror</MenuItem>
                  <MenuItem value="romance">Romance</MenuItem>
                  <MenuItem value="scifi">Sci-Fi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyNavbar;
