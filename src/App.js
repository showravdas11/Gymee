
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Booking from './components/Booking/Booking';
import SignIn from './components/SignIn/SignIn';
import Signup from './components/Signup/Signup';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
