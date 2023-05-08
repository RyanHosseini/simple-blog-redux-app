// a slice is where we divide up our state (Redux Store)
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: (state, action) => {
			// So, It's not mutating the state anymore, cause it uses ImmerJS underneath! (Only works in createSlice and ...)
			state.push(action.payload); // uses ImmerJS behind the scenes (under the hood), so we don't have to worry about mutating the state directly!
		},
	},
});

export const selectAllPosts = (state) => state.posts; // a selector function which gives us the posts part of the state.

// That is going to generate an action creator with the same name automatiaclly
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
