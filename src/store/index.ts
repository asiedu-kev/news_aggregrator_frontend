import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/auth";

const rootReducer = combineReducers({
    auth: authSlice.reducer,
});

const persistedReducer = persistReducer(
    {
        key: "root",
        version: 1,
        storage: storage,
    },
    rootReducer,
);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;

export default store;
