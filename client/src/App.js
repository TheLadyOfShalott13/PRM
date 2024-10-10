import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./authContext";
import Customers from "./pages/Customers";
import Login from "./pages/Login";
import Register from "./pages/Register";

//Gift modules
import DisplayAllGiftsTabular from "./pages/gift/Gifts";
import CreateGift from "./pages/gift/CreateGift";
import ViewGift from "./pages/gift/ViewGift";
import EditGift from "./pages/gift/EditGift";


import CreateCustomer from "./pages/CreateCustomer";

function App() {

  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
      if (!user) {
          return <Login title="Login to Create" />;
      } else {
          return children;
      }
  };

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/"                 element={<ProtectedRoute><Customers /></ProtectedRoute>} />

                <Route path="/Gifts"            element={<ProtectedRoute><DisplayAllGiftsTabular /></ProtectedRoute>} />
                <Route path="/CreateGift"        element={<ProtectedRoute><CreateGift /></ProtectedRoute>} />
                <Route path="/EditGift/:id"       element={<ProtectedRoute><EditGift /></ProtectedRoute>} />
                <Route path="/ViewGift/:id"       element={<ProtectedRoute><ViewGift /></ProtectedRoute>} />

                { /*
<Route path="/gifts/view"       element={<ProtectedRoute><ViewGift /></ProtectedRoute>} />

                <Route path="/interests"        element={<ProtectedRoute><DisplayAllInterestsTabular /></ProtectedRoute>} />
                <Route path="/interests/new"    element={<ProtectedRoute><CreateInterest /></ProtectedRoute>} />
                <Route path="/interests/edit"   element={<ProtectedRoute><EditInterest /></ProtectedRoute>} />
                <Route path="/interests/view"   element={<ProtectedRoute><ViewInterest /></ProtectedRoute>} />

                <Route path="/persons"          element={<ProtectedRoute><DisplayAllPersonsTabular /></ProtectedRoute>} />
                <Route path="/persons/new"      element={<ProtectedRoute><CreatePerson /></ProtectedRoute>} />
                <Route path="/persons/edit"     element={<ProtectedRoute><EditPerson /></ProtectedRoute>} />
                <Route path="/persons/view"     element={<ProtectedRoute><ViewPerson /></ProtectedRoute>} />
                    */
                }
                <Route path="/login"            element={<Login />} />
                <Route path="/register"         element={<Register />} />
                <Route path="/create"           element={<ProtectedRoute><CreateCustomer /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
