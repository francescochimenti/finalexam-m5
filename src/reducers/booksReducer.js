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
  setCategory: "history",
  displayAllBooks: history,
  setSearch: "",
};

/* ! 

in pratica redux ragiona cosi

const redux = {
  a: "quanteOrePerse"
};

const b = "a";

console.log(redux[b]);

è come se facessi redux.reduxInfame in pratica, però gli passo la key, di cosegnuenza

per cambiare categoria

state.displayAllBooks = state.books[action.payload] sarebbe state.books.categoria scelta
*/

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
