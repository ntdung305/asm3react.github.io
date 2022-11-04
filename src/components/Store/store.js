import { createStore } from "redux";
import rootReducer from "./Reducer";

const store = createStore(rootReducer);
// const initialState = { user: "" };
// const detailSlice = createSlice({
//   user: "",
//   reducers: {
//     show(state) {
//       state.showDetail = state.showDetail;
//     },
//     hidden(state) {
//       state.showDetail = !state.showDetail;
//     },
//   },
// });
// const store = configureStore({
//   reducer: detailSlice.reducer,
// });
// export const detailActions = detailSlice.actions;
export default store;
