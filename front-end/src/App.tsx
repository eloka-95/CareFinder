import { } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Guest from './layout/Guest';
import Home from './view/home/Home';
import Login from './components/Login';
import Register from './components/Register';
import News from './view/News/News';
import Health from './view/healthpage/health';
import Location from './view/healthpage/location';
import Details from './view/healthpage/Details';
import Contact from './view/healthpage/contact';
import EmailVerification from './components/ConfirmEmail';
import PrivateRoutes from './PrivateRoutes';
import PageNotFound from './components/PageNotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Guest />}>
          {/* THIS IS HOME ROUTE WITH ITS NESTED ROUTES  */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='news' element={<News />} />
          {/* This is the health info route with its nested routes  */}
          <Route element={<PrivateRoutes />}>
            <Route path='health' element={<Health />}>
              <Route index element={<Details />} />
              <Route path='location' element={<Location />} />
              <Route path='contact' element={<Contact />} />
            </Route>
          </Route>

        </Route>
        <Route path="/verifyemail" element={<EmailVerification />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



