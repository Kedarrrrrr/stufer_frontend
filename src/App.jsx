import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Profile from "./components/profile/Profile";
import RightBar from "./components/rightBar/RightBar.jsx";
import Notification from "./components/Notification/Notification.jsx";
import UserProtector from "./protector/UserProtector.jsx";
import ForYour from "./components/forYou/ForYour.jsx";
import Friends from "./components/friends/Friends.jsx";
import Community from "./components/community/Community.jsx";
import Allusers from "./AdminSide/Allusers.jsx";
import AdminProtector from "./protector/AdminProtector.jsx";

import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProtector>
        <Layout />
      </UserProtector>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/notifications", element: <Notification /> },
      { path: "/community", element: <Community /> },
      { path: "/for-you", element: <ForYour /> },
      { path: "/friends", element: <Friends /> },
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
    path: "/admin",
    element: (
      <AdminProtector>
        <Allusers />
      </AdminProtector>
    ),
  },
  {
    path: "*",
    element: <Login />, // fallback to login if route not found
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
