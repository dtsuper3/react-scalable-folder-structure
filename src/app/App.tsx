import { BlogDetailPage } from 'pages/blog-detail';
import { Home } from 'pages/home';
import { Routes, Route } from 'react-router-dom'

import './app.css';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogDetailPage />} />
    </Routes>
  );
}

export default App;