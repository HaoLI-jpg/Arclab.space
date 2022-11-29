import styles from './App.scss';
import HomePage from './HomePage';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import { ProductPage } from './ProductPage';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="register" element={<UserRegister />} />
        <Route path="page" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
