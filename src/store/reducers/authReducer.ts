import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoginedIn: boolean;
  username: string
};

const initialAuthState: AuthState =  {
  isLoginedIn: false,
  username: ''
};

const authSlice = createSlice({
  name:'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state, action: PayloadAction<string>)=>{
      state.isLoginedIn = true;
      state.username = action.payload;
    },
    logout: (state) =>{
      state.isLoginedIn = false;
      state.username = ''
    }
  }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;