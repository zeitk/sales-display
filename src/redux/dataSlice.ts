import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../Interfaces/Interfaces';

interface DataState {
  data: IProduct | null;
}

const initialState: DataState = {
  data: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<IProduct>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;