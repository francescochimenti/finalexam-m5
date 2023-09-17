import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commentId: null,

};

const commentReducer = createSlice({
    name: "comment",
    initialState,
    reducers: {
        setCommentId: (state, action) => {
            state.commentId = action.payload;
        }
    }
});

export const { setCommentId } = commentReducer.actions;

export const selectCommentId = (state) => state.comment.commentId;

export default commentReducer.reducer;