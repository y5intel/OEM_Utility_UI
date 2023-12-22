import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // tokenObjectArray: [], // Initial token object array
    selectedToken: null, // Initially selected token
};

export const tokenItemsReducer = createSlice({
    name: "tokenItems",
    initialState,
    reducers: {
        initializeTokens: (state) => {
            // state.tokenObjectArray = [];
            state.selectedToken = null;
        },
        // storeTokens: (state, action) => {
        //     state.tokenObjectArray = action.payload;
        // },
        setConsumableToken: (state, action) => {
            // const index = action.payload - 1; // Adjust to zero-based index
            // state.selectedToken = state.tokenObjectArray[index] || null;
            state.selectedToken = action.payload;
        },
    },
});

export const { initializeTokens, setConsumableToken } =
    tokenItemsReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const consumableTokenState = (state) => state.tokenItems;

export default tokenItemsReducer.reducer;
