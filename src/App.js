import logo from './logo.svg';
import './App.css';
// import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import JobPostPage from './pages/JobPostPage';
import JobListPage from './pages/ListJobPage';
import { AuthProvider } from './context/AuthContext';
import NavBar from './component/Navbar';

function App() {
  

  return (
    // register all the
    <AuthProvider>
    <Router>
      <NavBar />
      <Routes>
        
        <Route path="/login" element = {<LoginPage />}>
          
        </Route>
        <Route  path="/signup" element = {<SignupPage/>}>
         
        </Route>
        <Route path="/jobpost" element = {<JobPostPage />}>
          
        </Route>
        <Route path="/joblist" element={  <JobListPage />}>
        
        </Route>
      </Routes>
    </Router>

  
    </AuthProvider>
       

  );
}

export default App;
