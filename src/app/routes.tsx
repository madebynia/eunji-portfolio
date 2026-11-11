import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Sidebar, SiteFooter } from '../components/Sidebar';
import { HomePage } from '../pages/HomePage';
import { StoryPage } from '../pages/StoryPage';
import { WorkPage } from '../pages/WorkPage';
import { NotFoundPage, PortfolioDetail, PortfolioIndex } from '../pages/PortfolioPages';
import { ResumePage } from '../pages/ResumePage';
import { RouteEffects } from './RouteEffects';

function WorkRoute() {
  const { hash } = useLocation();
  const legacy: Record<string, string> = {
    '#clinical-data': '/work/clinical-data', '#automation': '/work/automation', '#products': '/projects',
  };
  return legacy[hash] ? <Navigate to={legacy[hash]} replace /> : <WorkPage />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/resume" element={<><ResumePage /><RouteEffects /></>} />
      <Route path="*" element={<SiteLayout />} />
    </Routes>
  );
}

function SiteLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkRoute />} />
        <Route path="/work/:slug" element={<PortfolioDetail kind="work" />} />
        <Route path="/projects" element={<PortfolioIndex kind="projects" />} />
        <Route path="/projects/:slug" element={<PortfolioDetail kind="projects" />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
      </div>
      <RouteEffects />
    </div>
  );
}
