import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  
  return (
   <div>
     <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/blogs' element={<BlogsPage/>}/>
            <Route path='/post' element={<BlogPostPage/>}/>
        </Routes>
     </Router>
   </div>
  )
}

export default App
