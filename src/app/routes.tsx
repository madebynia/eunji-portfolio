import { Route, Routes } from 'react-router-dom';
import { SiteHeader } from '../components/SiteHeader';
import { HomePage } from '../pages/HomePage';
import { StoryPage } from '../pages/StoryPage';
import { WorkPage } from '../pages/WorkPage';

export function AppRoutes() {
  return (
    <>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
