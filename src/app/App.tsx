import { BrowserRouter } from 'react-router-dom';
import '../styles/tokens.css';
import '../styles/site.css';
import { AppRoutes } from './routes';

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
