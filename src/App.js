import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Booking from './Components/Book/Booking';
import About from './Components/AboutUs/About';
import Team from './Components/Team/Team';
import Blog from './Components/Blog/Blog';
import FAQ from './Components/FAQ/FAQ';
import Log from './Components/Login/Log';
import Register from './Components/Login/Register';
import PassWord from './Components/Login/PassWord';



const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/service' element={<Services />} />
    <Route path='/booking' element={<Booking />} />
    <Route path='/about' element={<About />} />
    <Route path='/team' element={<Team />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/faq' element={<FAQ />} />
    <Route path='/login' element={<Log />} />
    <Route path='/register' element={<Register />} />
    <Route path='/password' element={<PassWord />} />
  </Route>
))

function App() {
  return (
    <div className='App'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
