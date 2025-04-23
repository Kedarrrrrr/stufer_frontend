import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import LeftBar from "./components/leftBar/LeftBar"
import NavBar from "./components/navBar/NavBar"

import Home from "./pages/home/Home"
import Profile from "./components/profile/Profile"
import RightBar from "./components/rightBar/RightBar.jsx"
import AddPostPopup from "./components/leftBar/AddPostPopup.jsx"
import Notification from "./components/Notification/Notification.jsx"



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
         
          <Layout />,
         
      
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/notifications",
          element: <Notification />,
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

    {
      path: "/notifications",
      element: <Notification />,
    },
  ]);
  

  return (
    <>
        <RouterProvider router={router} />
         
    </>
  )
}

export default App