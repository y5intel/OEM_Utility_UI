import { createSlice } from "@reduxjs/toolkit";

const keypairSingerReducer = createSlice({
    name: "keypairSigner",
    initialState: {
        publicKey: "",
        secretKey: {},
    },
    reducers: {
        storeKeypair: (state, action) => {
            const { publicKey, secretKey } = action.payload;
            state.publicKey = publicKey;
            state.secretKey = secretKey;
        },
        clearKeypair: (state) => {
            state.publicKey = "";
            state.secretKey = {};
        },
    },
});

export const { storeKeypair, clearKeypair } = keypairSingerReducer.actions;

export const selectKeypairState = (state) => state.keypairSigner;

export default keypairSingerReducer.reducer;
