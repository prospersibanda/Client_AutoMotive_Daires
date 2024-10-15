import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';

function App() {
  
  return (
   <div>
     <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/blogs' element={<BlogsPage/>}/>
        </Routes>
     </Router>
   </div>
  )
}

export default App
