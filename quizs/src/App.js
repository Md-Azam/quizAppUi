import './App.css';
import {BrowserRouter , Routes ,Route } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import Category from './component/Category';
import AddQuiz from './component/addQuiz';
import AddQuestion from './component/addQuestion';
import AttemtQuiz from './component/viewQuiz';
function App() {
  return (
    <BrowserRouter>
  <ToastContainer />
  <Routes>
    <Route path="/" element={<Category />} />
     <Route path="/addQuiz" element={<AddQuiz />} />
    <Route path="/addQuestion" element={<AddQuestion />} />

    <Route path="/attemptQuiz" element={<AttemtQuiz />} /> 
  </Routes>
  </BrowserRouter>
  );
}

export default App;
