import styles from './App.scss';
import HomePage from './HomePage';
import UserSignInAndSignUp from './UserSignInAndSignUp';
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
        <Route path="login" element={<UserSignInAndSignUp />} />
        <Route path="page" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
