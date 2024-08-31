import { combineReducers, createStore } from "redux";
import { globalReducer } from "./reducer/GlobalReducer/globalReducer";
import { HomePageReducer } from "./reducer/HomePage/HomePageReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
   key: 'root',
   storage,
 }
 const reducer=combineReducers({
    globalReducer,
    HomePageReducer
 })
export const appPersistReducer=persistReducer(persistConfig,reducer)

 export const store= createStore(appPersistReducer)
  persistStore(store)
 
