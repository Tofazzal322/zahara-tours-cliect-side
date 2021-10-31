
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MenuBar from "./Shared/MenuBar/MenuBar";
import Footer from "./Shared/Footer/Footer";
import Services from "./Pages/Services/Services";

import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/Login/Login";

import AddServices from "./Pages/AddServices/AddServices";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyBooking from "./Pages/MyBooking/MyBooking";
import ManageTours from "./Pages/ManageAllBooking/ManageTours";
import Packages from "./Pages/Packages/Packages";
import Booking2 from "./Pages/Booking/Booking2";
import UpdateBooking from "./Pages/UpdateData/UpdateBooking";
import Contact from "./Pages/Contact/Contact";
import UpdatePackages from "./Pages/UpdateData/UpdatePackages";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MenuBar/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/Services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/Packages">
            <Packages></Packages>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
           <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute exact path="/myTours">
          <MyBooking></MyBooking>
          </PrivateRoute>
          <PrivateRoute exact path="/manageTours">
           <ManageTours></ManageTours>
          </PrivateRoute>
          <PrivateRoute exact path="/AddServices">
           <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute exact path="/booking/:bookId">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute exact path="/UpdateBooking/:bookId">
            <UpdateBooking></UpdateBooking>
          </PrivateRoute>
          <PrivateRoute exact path="/UpdatePackages/:bookId">
            <UpdatePackages></UpdatePackages>
          </PrivateRoute>
          <PrivateRoute exact path="/booking2/:bookId2">
            <Booking2></Booking2>
          </PrivateRoute>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
           <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
