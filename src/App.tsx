import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { HomePage } from './pages/HomePage';
import { DocsPage } from './pages/DocsPage';
import { ScrollToHash } from './components/ScrollToHash';
// import SplashCursor from './components/reactbits/SplashCursor';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* <SplashCursor /> */}
        <BrowserRouter>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs/*" element={<DocsPage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

