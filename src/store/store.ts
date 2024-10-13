import { configureStore, Tuple } from '@reduxjs/toolkit';
import rootReducer from './reducers';


//自动添加thunk中间件和Redux DevTools扩展
const store = configureStore({ 
  reducer: rootReducer,
});
export default store;