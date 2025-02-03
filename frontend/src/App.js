import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AboutUs from './components/AboutUs';
import AboutNeoprene from './components/AboutNeoprene';
import ColorInfo from './components/ColorInfo';
import ArtworkInfo from './components/ArtworkInfo';
import LeadTimes from './components/LeadTimes';
import EnquiryForm from './components/EnquiryForm';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Terms from './components/Terms';
import Footer from './components/Footer';
import UserAccount from './components/UserAccount';
import Chatbot from './components/Chatbot';
import CookiesNotice from './components/CookiesNotice';
import Home from './components/Home';
import Logout from './components/Logout';
import Login from './components/Login';
import Signup from './components/Signup';
import './styles.css';
//import './App.css';

const App=()=> {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCookies, setShowCookies] = useState(true);
  

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleCookies = (decision) => {
    setShowCookies(false);
    console.log(`Cookies ${decision}`);
  };
  
  return (
    <Router>
       <div className="app">
        <Header onToggleSidebar={toggleSidebar}/>
        
        { sidebarOpen && <Sidebar onClose={toggleSidebar}/>}
       
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Hero />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-neoprene" element={<AboutNeoprene />} />
            <Route path="/color-info" element={<ColorInfo />} />
            <Route path="/artwork-info" element={<ArtworkInfo />} />
            <Route path="/lead-times" element={<LeadTimes />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/enquiry-form" element={<EnquiryForm />} />
             <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} /> 
              <Route path="/account" element={<UserAccount />} />
          </Routes>
        </main>
        
        
        <Footer/>
        
        <Chatbot />
        {showCookies && (
          <CookiesNotice
            onAccept={() => handleCookies('Accepted')}
            onReject={() => handleCookies('Rejected')}
          />
        )}
        
      </div>
    </Router>
   
  );
}

export default App;
