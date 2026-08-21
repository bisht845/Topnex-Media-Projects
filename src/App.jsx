import Navbar from './components/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import BlogsDetail from "./pages/BlogsDetail"
import Contact from "./pages/Contact"
import Carrer from "./pages/Carrer"
import Layout from './components/Layout'

function App() {

  return (
    <>
      <BrowserRouter basename="/Topnex-Media-Projects">
          <Routes>
              <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/blogs' element={<Blogs />} />
                  <Route path='/blogsdetail/:Id' element={<BlogsDetail />} />
                  <Route path='/carrer' element={<Carrer />} />
                  <Route path='/contact' element={<Contact />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
