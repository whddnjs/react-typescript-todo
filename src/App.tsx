import React from 'react';
import { Route, Routes } from 'react-router';
import { DefaultLayout } from './layouts';
import { ScheduleCreatePage, ScheduleListPage } from './pages';

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path='/' element={<ScheduleListPage />} />
        <Route path='/create' element={<ScheduleCreatePage />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
