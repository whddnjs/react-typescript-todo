import { createSlice } from '@reduxjs/toolkit';

export interface Schedule {
  id: number;
  title: string;
  content: string;
}

export interface ScheduleState {
  schedules: Schedule[];
  selectedSchedule: null | Schedule;
}

const initialState: ScheduleState = {
  schedules: [],
  selectedSchedule: null,
};

/**\
 * 리스트 조회
 * -
 * 상세조회
 * 생성
 * 수정
 * 삭제
 */

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    selected: (state, action) => {
      const selectedSchedule = action.payload;
      state.selectedSchedule = selectedSchedule;
    },
    create: (state, action) => {
      const createSchedule = action.payload.createSchedule;
      // 기존의 배열에 새로만든 스캐쥴을 넣어준다.
      state.schedules = [...state.schedules, createSchedule];
    },
    update: (state, action) => {
      const updateSchedule: Schedule = action.payload;

      const updateSchedules = state.schedules.map(schedule => {
        if (schedule.id !== updateSchedule.id) {
          return schedule;
        }

        return updateSchedule;
      });

      state.schedules = updateSchedules;
    },
    destroy: (state, action) => {
      const deleteScheduleId: number = action.payload;

      const filterSchedules = state.schedules.filter(
        schedule => schedule.id !== deleteScheduleId
      );

      state.schedules = [...filterSchedules];
    },
  },
});

export default scheduleSlice.reducer;
export const { selected, create, update, destroy } = scheduleSlice.actions;
