import { createStore } from "redux";

import CombinedReducers from "./reducer";

export default createStore(CombinedReducers);