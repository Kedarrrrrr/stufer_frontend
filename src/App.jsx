import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import LeftBar from "./components/leftBar/LeftBar"
import NavBar from "./components/navBar/NavBar"

import Home from "./pages/home/Home"
import Profile from "./components/profile/Profile"
import RightBar from "./components/rightBar/RightBar.jsx"



function App() {



  const Layout =()=>{
    return(
      <>
      <NavBar />
      <div style={{display:'flex' , justifyContent:"space-between"}}>
          <LeftBar />
          <Outlet />
          <RightBar />
      </div>
      </>
    )
  }




  const router=createBrowserRouter([
    {
      path: "/",
      element:
         (
          
            <Layout />
          
          
         ),
      
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  

  return (
    <>
        <RouterProvider router={router} />
         
    </>
  )
}

export default App