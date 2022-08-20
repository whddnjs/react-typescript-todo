import React from 'react';
import { Route, Routes } from 'react-router';
import { ScheduleListPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ScheduleListPage />} />
    </Routes>
  );
}

export default App;
