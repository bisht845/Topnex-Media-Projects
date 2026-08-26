import Navbar from './components/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import BlogsDetail from "./pages/BlogsDetail"
import Contact from "./pages/Contact"
import Menu from "./pages/Menu"
import Layout from './components/Layout'
import Gallery from './pages/Gallery'

function App() {

  return (
    <>
      <BrowserRouter basename="/nachoggkp.com">
          <Routes>
              <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/blogs' element={<Blogs />} />
                  <Route path='/blogsdetail/:Id' element={<BlogsDetail />} />
                  <Route path='/menu' element={<Menu />} />
                  <Route path='/gallery' element={<Gallery />} />
                  <Route path='/contact' element={<Contact />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
