import { createSlice } from "@reduxjs/toolkit";

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