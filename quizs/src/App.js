import './App.css';
import {BrowserRouter , Routes ,Route } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import Category from './component/Category';
function App() {
  return (
    <BrowserRouter>
  <ToastContainer />
  <Routes>
    <Route path="/" element={<Category />} />
    {/* <Route path="/view" element={<ViewPost />} />
    <Route path="/edit/:id" element={<Edit />} />
    <Route path="/viewone/:id" element={<SeeOne />} /> */}
  </Routes>
  </BrowserRouter>
  );
}

export default App;
