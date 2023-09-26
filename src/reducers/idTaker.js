import { createSlice } from "@reduxjs/toolkit";

// this is a simple id taker, that's will help us to fetch the comments of the selected book and update that, also needed for the selected book 
// i'm in love with redux anyway

const idTaker = createSlice({
    name: "idTaker",
    initialState: {
        id: 0,
    },
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        }
    }
});

export const { setId } = idTaker.actions;
export default idTaker.reducer;