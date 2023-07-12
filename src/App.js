import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';
import CareersError from './pages/careers/CareersError';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/help/Contact';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Faq from './pages/help/Faq';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import { NotFound } from './pages/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}
>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />

        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App