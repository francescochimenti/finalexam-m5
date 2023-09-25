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
} from "@mui/material";
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme);
  const currentCategory = useSelector((state) => state.books.setCategory);
  const location = useLocation(); 

  const setSearchInput = (event) => {
    dispatch(setSearch(event.target.value));
  };

  const setCategoryNow = (event) => {
    dispatch(setCategory(event.target.value));
  };

  const isHome = location.pathname === "/";

  return (
    <Box sx={{ flexGrow: 1 }} className="sticky-top">
      <AppBar
        position="static"
        color="default"
        sx={{
          padding: 1,
        }}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={1} sm={1} md={1}>
              <IconButton color="inherit" onClick={() => dispatch(toggleTheme())}>
                {themeMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Grid>
            <Grid item xs={5} sm={3} md={3}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, textAlign: "left" }}
              >
                epibooks
              </Typography>
            </Grid>
            
            {isHome ? (
              <>
                <Grid item xs={6} sm={3} md={2}>
                  <TextField
                    className="input"
                    fullWidth
                    placeholder="Search books"
                    onChange={setSearchInput}
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={1}>
                  <FormControl fullWidth>
                    <Select
                      value={currentCategory}
                      onChange={setCategoryNow}
                      displayEmpty
                      className="box"
                    >
                      <MenuItem value="history">History</MenuItem>
                      <MenuItem value="fantasy">Fantasy</MenuItem>
                      <MenuItem value="horror">Horror</MenuItem>
                      <MenuItem value="romance">Romance</MenuItem>
                      <MenuItem value="scifi">Sci-Fi</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </>
            ) : (
                <Typography variant="h6" gutterBottom>
                <Link to={"/"}>Back to the Homepage</Link>
              </Typography>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyNavbar;
