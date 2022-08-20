import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from './ScheduleSlice';

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
});
