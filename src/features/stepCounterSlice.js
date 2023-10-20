import { createSlice } from "@reduxjs/toolkit";

export const stepCounterReducer = createSlice({
    name: "stepCounter",
    initialState: {
        value: 0,
    },
    reducers: {
        incrementStepCount: (state) => {
            state.value += 1;
        },
        decrementStepCount: (state) => {
            state.value = state.value === 0 ? 0 : state.value - 1;
        },
        setStepCount: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { incrementStepCount, decrementStepCount, setStepCount } =
    stepCounterReducer.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectStepCount = (state) => state.stepCounter.value;

export default stepCounterReducer.reducer;
