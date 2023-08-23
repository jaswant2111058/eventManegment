
import Homepage from "./components/homepage/home";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import { HashRouter, Routes, Route, } from "react-router-dom";

            
function App()
{  
            return (
              <HashRouter>
              <Routes>
              <Route exact path ='/' element={<Homepage/>}/>
              <Route exact path ='/lsevents' element={<Dashboard/>}/>
              <Route exact path ='/login' element={<Login/>}/>
              </Routes>
              </HashRouter>

  );
}


export default App;

