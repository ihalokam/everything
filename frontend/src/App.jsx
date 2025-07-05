import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

// Global Layout Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Top-Level Pages
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import Gadget from './pages/Gadget.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Disclaimer from './pages/Disclaimer.jsx';

// Lottery Result Pages
import LotteryHome from './pages/results/LotteryHome.jsx';
import Kr710 from './pages/results/Kr710.jsx';
import Ss400 from './pages/results/Ss400.jsx';
import Ss471 from './pages/results/Ss471.jsx';

// Movie Subcategory Pages
import Eng from './pages/movies/Eng.jsx';
import Mal from './pages/movies/mal.jsx';
import Tel from './pages/movies/Tel.jsx';
import Hin from './pages/movies/Hin.jsx';
import Kann from './pages/movies/Kann.jsx';
import Tam from './pages/movies/Tam.jsx';

// Gadgets Page
import Under15K from './pages/gadgets/Under15K.jsx';

function App() {
  return (
    <Box minH="100vh">
      <Navbar />

      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gadgets" element={<Gadget />} />

        {/* Movie Language Subpages */}
        <Route path="/movies/eng" element={<Eng />} />
        <Route path="/movies/mal" element={<Mal />} />
        <Route path="/movies/tel" element={<Tel />} />
        <Route path="/movies/hin" element={<Hin />} />
        <Route path="/movies/kann" element={<Kann />} />
        <Route path="/movies/tam" element={<Tam />} />

        {/* Lottery Results */}
        <Route path="/lottery-result" element={<LotteryHome />} />
        <Route path="/lottery-result/kr710" element={<Kr710 />} />
        <Route path="/lottery-result/ss400" element={<Ss400 />} />
        <Route path="/lottery-result/ss471" element={<Ss471 />} />

        {/* Gadgets Page */}
        <Route path="/gadgets/under-15k" element={<Under15K />} />

        {/* Static Info Pages */}
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        {/* Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
