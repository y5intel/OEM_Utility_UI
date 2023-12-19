import { createSlice } from "@reduxjs/toolkit";

const keypairSingerSlice = createSlice({
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

export const { storeKeypair, clearKeypair } = keypairSingerSlice.actions;

export const selectKeypairState = (state) => ({
    publicKey: state.keypairSigner.publicKey,
    secretKey: state.keypairSigner.secretKey,
});

export default keypairSingerSlice.reducer;
