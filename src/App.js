
import './App.css';
import Contact from './Pages/Contact';
import Destinations from './Pages/Destinations';
import Footer from './Pages/Footer';
import Gallery from './Pages/Gallery';
// import Header from './Pages/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PlaceDetails from './Pages/PlaceDetails';
import Register from './Pages/Register';
import Reservation from './Pages/Reservation';
import Reviews from './Pages/Reviews';
// import Services from './Pages/Services';
// import PlaceDetails from './Pages/PlaceDetails';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Profile from './Pages/Profile';


function App() {
  const navigate = useNavigate();
  useEffect(() => {
    let email = localStorage.getItem('state');
    if (!email) {
      navigate('/Login')
    }
  }, []);
  return (
    <div >
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Destinations' element={<Destinations />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Reviews' element={<Reviews />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/PlaceDetails/:id' element={<PlaceDetails />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
