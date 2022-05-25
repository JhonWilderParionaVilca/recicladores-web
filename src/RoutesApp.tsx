import { Routes, Route } from 'react-router-dom';
import { Footer } from './core/layout/Footer';
import { Header } from './core/layout/Header';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Point } from './pages/Point';
import { Register } from './pages/Register';

export const RoutesApp = () => (
  <>
    <div className="layout min-h-screen w-screen justify-center">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Point />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </>
);
