import React from 'react';
import { Route, Routes } from 'react-router';
import { DefaultLayout } from './layouts';
import { ScheduleListPage } from './pages';

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path='/' element={<ScheduleListPage />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
