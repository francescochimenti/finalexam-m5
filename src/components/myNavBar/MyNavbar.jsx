import React, { useState, useEffect } from "react";
import "./mynavbar.css"
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
  Drawer,
  List,
  ListItem,
  Skeleton
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme);
  const currentCategory = useSelector((state) => state.books.setCategory);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 750);
  }, []);

  const handleSearchChange = (event) => {
    dispatch(setSearch(event.target.value));
  };

  const handleChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <Link to="/">HOME</Link>
        </ListItem>
        <ListItem button>
          <Link to="/">BROWSE</Link>
        </ListItem>
        <ListItem button>
          <Link to="/">ABOUT</Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default"
        sx={
          {
          padding: 1
        }
      }
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={1} sm={1} md={1}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {list()}
              </Drawer>
            </Grid>
            <Grid item xs={1} sm={1} md={1}>
              <IconButton
                color="inherit"
                onClick={() => dispatch(toggleTheme())}
              >
                {loading ? <Skeleton variant="circle" width={40} height={40}/> : (themeMode === "light" ? (
                  <Brightness4Icon />
                ) : (
                  <Brightness7Icon />
                ))}
              </IconButton>
            </Grid>
            <Grid item xs={5} sm={3} md={3}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, textAlign: "left" }}
              >
               {loading ? <Skeleton width="70%" /> : "epibooks"}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                className="input"
                fullWidth
                placeholder="Search books"
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={1}>
              <FormControl fullWidth>
                {loading ? <Skeleton variant="rectangular" width="100%" height="40px" sx={{ marginLeft: "10px" }} /> : 
                <Select
                  value={currentCategory}
                  onChange={handleChange}
                  displayEmpty
                  className="box"
                >
                  <MenuItem value="history">History</MenuItem>
                  <MenuItem value="fantasy">Fantasy</MenuItem>
                  <MenuItem value="horror">Horror</MenuItem>
                  <MenuItem value="romance">Romance</MenuItem>
                  <MenuItem value="scifi">Sci-Fi</MenuItem>
                </Select>}
              </FormControl>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyNavbar;
