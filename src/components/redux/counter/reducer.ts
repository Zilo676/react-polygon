import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    reset: () => { initialState.value },
    incrementByAmount: (state, action: PayloadAction<number>) => { state.value += action.payload }
  }
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;