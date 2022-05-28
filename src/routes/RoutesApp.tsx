import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from '../core/layout';
import { Home, Login, NotFound, Point, Register } from '../pages';
import { LogoutRoutes } from './LogoutRoutes';
import { ProtectedRoute } from './ProtectedRoute';

export const RoutesApp = () => (
  <>
    <div className="layout">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/create" element={<Point />} />
        </Route>
        <Route path="/" element={<LogoutRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </>
);
