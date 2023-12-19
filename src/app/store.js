import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import stepCounterReducer from "../features/stepCounterSlice";
import walletItemsReducer from "../features/walletItemSlice";
import keypairSingerSlice from "features/keypairSingerSlice";

const reducers = combineReducers({
    stepCounter: stepCounterReducer,
    walletItems: walletItemsReducer,
    keypairSigner: keypairSingerSlice,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export default store;
