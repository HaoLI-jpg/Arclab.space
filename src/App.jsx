import styles from './App.scss';
import HomePage from './HomePage';
import UserSignInAndSignUp from './UserSignInAndSignUp';
import ProductPage from './ProductPage';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Welcome from './GalleryPage';
import Gallery from './GalleryPage/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserSignInAndSignUp />} />
        <Route path="/page/:id" element={<ProductPage />} />
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;