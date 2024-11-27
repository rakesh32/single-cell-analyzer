import { Route, Routes } from 'react-router-dom';
import './App.css';
import PublicRoutes from './routes/publicRoutes';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<PublicRoutes />} />
    </Routes>
  );
}

export default App;
