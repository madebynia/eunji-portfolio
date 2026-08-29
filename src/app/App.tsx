import { BrowserRouter } from 'react-router-dom';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import '../styles/tokens.css';
import '../styles/global.css';
import { AppRoutes } from './routes';

export function App() {
  return (
    <BrowserRouter>
      <div className="site-frame">
        <SiteHeader />
        <AppRoutes />
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
