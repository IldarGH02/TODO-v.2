import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer} from "redux-persist";
import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage"

import todosSlice from "./slices/todosSlice";
import { ROOT } from "constant";

const rootReducer = combineReducers({
    todos: todosSlice
})

const persistConfig = {
    key: ROOT,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)