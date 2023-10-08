  import logo from './logo.svg';
  import './App.css';
  import SideBar from './components/SideBar';
  import Students from './components/Students';
  import Attendence from './components/Attendence';
  import Courses from './components/Courses';
  import NoPage from './components/NoPage';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Dashboard from './components/Dashboard';
  
  function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/student' element={<Students/>}/>
          <Route path='/course' element={<Courses/>}/>
          <Route path='/attendence' element={<Attendence/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
