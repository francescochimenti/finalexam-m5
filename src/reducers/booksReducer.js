import { createSlice } from "@reduxjs/toolkit";
import fantasy from "../data/book-data/fantasy.json";
import history from "../data/book-data/history.json";
import horror from "../data/book-data/horror.json";
import romance from "../data/book-data/romance.json";
import scifi from "../data/book-data/scifi.json";

const initialState = {
  books: {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi,
  },
  setCategory: "history", // set the default value for the select menu
  displayAllBooks: history, // set the default book to show equal to te selected category
  setSearch: "",
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setCategory: (state, action) => {
      state.setCategory = action.payload;
      state.displayAllBooks = state.books[action.payload]
    },
    setSearch: (state, action) => {
      state.displayAllBooks = state.books[state.setCategory].filter((book) =>
        book.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      },
  },
});

export const { setCategory, setSearch } = booksSlice.actions;

export default booksSlice.reducer;
