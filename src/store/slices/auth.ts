import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, User } from "../../models";

type State = {
  token: string | null;
  account: Account | null;
  user: User | null;
};

const initialState: State = { token: null, account: null, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens(state: State, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
    setAccount(state: State, action: PayloadAction<Account>) {
      state.account = action.payload;
      state.user = action.payload.owner;
    },
    setLogout(state: State) {
      state.account = null;
      state.user = null;
      state.token = null;
    },
  },
});

export default authSlice;

export const logout = () => async (dispatch) => {
  try {
    return dispatch(authSlice.actions.setLogout());
  } catch (e) {
    return console.error(e.message);
  }
};
