import { BrowserRouter } from 'react-router-dom';
import { SiteFooter } from '../components/SiteFooter';
import '../styles/tokens.css';
import '../styles/global.css';
import { AppRoutes } from './routes';

export function App() {
  return (
    <BrowserRouter>
      <div className="site-frame">
        <AppRoutes />
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
