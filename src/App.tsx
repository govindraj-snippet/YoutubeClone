import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Loader } from './components/shared/Loader';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Watch = lazy(() => import('./pages/Watch'));
const Channel = lazy(() => import('./pages/Channel'));
const CategoryFeed = lazy(() => import('./pages/CategoryFeed'));
const Shorts = lazy(() => import('./pages/Shorts'));
const Library = lazy(() => import('./pages/Library'));

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch/:videoId" element={<Watch />} />
          <Route path="/channel/:channelId" element={<Channel />} />

          <Route path="/shorts" element={<Shorts />} />

          <Route path="/history" element={<Library />} />
          <Route path="/liked" element={<Library />} />
          <Route path="/watch-later" element={<Library />} />
          <Route path="/your-videos" element={<Library />} />
          <Route path="/subscriptions" element={<Library />} />

          <Route path="/trending" element={<CategoryFeed />} />
          <Route path="/shopping" element={<CategoryFeed />} />
          <Route path="/music" element={<CategoryFeed />} />
          <Route path="/movies" element={<CategoryFeed />} />
          <Route path="/live" element={<CategoryFeed />} />
          <Route path="/gaming" element={<CategoryFeed />} />
          <Route path="/news" element={<CategoryFeed />} />
          <Route path="/sports" element={<CategoryFeed />} />
          <Route path="/learning" element={<CategoryFeed />} />
          <Route path="/fashion" element={<CategoryFeed />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
