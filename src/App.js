import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { Timeline } from "./pages/Timeline";
import { Navbar } from "./components/Navbar";
import Private from "./pages/Private";
import PrivateRoute from "./services/ProtectedRoute";
import AddBlog from "./pages/AddBlog";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { logOut, setIsLoggedIn } from "./services/authSlice";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        dispatch(logOut());
        dispatch(setIsLoggedIn(false));
        alert("Logged Out");
      }, 7 * 24 * 50 * 50 * 1000);
    }
  }, [dispatch, isLoggedIn]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/private" element={<Private />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
