import { BrowserRouter } from 'react-router-dom';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
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
