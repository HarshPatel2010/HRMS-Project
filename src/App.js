import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProjectManagement from './Pages/ProjectManagement';
import EmployeeManagement from './Pages/EmployeeManagement';
import SideNav from './COMPONENTS/SideNav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Home from './COMPONENTS/Home';

function App() {
  return (
   <>
    <Router>
      <SideNav>
      <Routes>
        <Route exact path='/'  element={<Home/>}/>
        <Route exact path='/employeemanagement' element={<EmployeeManagement/>}/>
        <Route exact path='/projectmanagement' element={<ProjectManagement/>}/>
      </Routes>
      </SideNav>
    </Router>
   </>
  );
}

export default App;
