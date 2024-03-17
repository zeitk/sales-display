import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice.ts';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;