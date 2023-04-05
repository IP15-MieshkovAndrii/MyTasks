import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LocalStorageService, LS_KEYS } from 'services/localStorage';
import { TasksProvider } from 'hooks';
import { Layout, NotFoundPage, DonePage, HomePage } from 'routes';
import './app.scss';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="done" element={<DonePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
