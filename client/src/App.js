import './App.css';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Add from "./components/addFlight/Add.jsx";
import Edit from './components/updateFlight/Edit.jsx';
import Flight from './components/getFlight/Flight.jsx';

function App() {
  const route = createBrowserRouter([
    {
      path : "/add",
      element: <Add />
    },
    {
      path : "/edit/:id",
      element: <Edit />
    },
    {
      path : "/",
      element: <Flight />
    }
  ]);

  return (
    <div className='App'>
        <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
