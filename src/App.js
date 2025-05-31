import './App.css';
import SideBar from './components/sidebar/SideBar';
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='sidebar'>
        <SideBar/>
        </div>
        <div className='body'>
          <Routes>
          {publicRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
