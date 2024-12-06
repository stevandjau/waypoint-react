import { BrowserRouter, Routes, Route } from 'react-router';
import Welcome from '../pages/Welcome/Welcome';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
