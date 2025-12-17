import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './components/layout';
import {
  HomePage,
  ProductPage,
  KnowledgeBasePage,
  ArticleDetailPage,
  CommunityPage,
} from './pages';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="knowledge" element={<KnowledgeBasePage />} />
            <Route path="knowledge/:slug" element={<ArticleDetailPage />} />
            <Route path="community" element={<CommunityPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

