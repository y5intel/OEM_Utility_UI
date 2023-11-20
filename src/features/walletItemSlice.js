import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, data: [] };

export const walletItemsReducer = createSlice({
    name: "walletItems",
    initialState,
    reducers: {
        setWalletCount: (state, action) => {
            state.count = action.payload;
        },
        addWalletData: (state, action) => {
            state.data[action.payload.index] = action.payload.value;
        },
        initializeWallets: (state) => {
            // Reset the state to its initial value
            Object.assign(state, initialState);
        },
    },
});

export const { setWalletCount, addWalletData, initializeWallets } =
    walletItemsReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectWalletState = (state) => ({
    count: state.walletItems.count,
    data: state.walletItems.data,
});

export default walletItemsReducer.reducer;
