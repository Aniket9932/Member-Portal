import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Search from './components/Caregiver-card/Search'
import Dashboardheader from './components/Dashboard/Dashboardheader'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Blog from './pages/Blog'
import Caregiver from './pages/Caregiver'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  
  return (
    <>
    <Router>
      
      <Routes>

        <Route path='/' element={<> <Header/> <HomePage/> <Footer/> </>}/>
        <Route path='/register' element={<> <Header/> <Signup/> </>}/>
        <Route path='/about' element={<> <Header/> <About/> <Footer/></>}/>
        <Route path='/blog' element={<> <Header/> <Blog/> <Footer/></>}/>
        <Route path='/contact' element={<> <Header/> <Contact/> <Footer/></>}/>

        

          <Route path='/login' element={<> <Header/> <Login/> </>}/>
          <Route path='/dashboard' element={<> <Dashboardheader/> <Dashboard/> </>} />
          <Route path='/dashboard/caregiver' element={<> <Dashboardheader/> <Caregiver/> </>} />
          <Route path='/dashboard/caregiver/search' element={<> <Dashboardheader/> <Search/> </>} />

          

        

      </Routes>


    </Router>
      <ToastContainer />
      </>
   
  )
}

export default App