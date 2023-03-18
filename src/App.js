import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js"
import ViewBlogs from "./components/ViewBlogs/ViewBlogs.js"
import Footer from "./components/Footer/Footer.js";
import About from "./components/About/About.js"
import AddPostForm from "./components/AddPostForm/AddPostForm.js";

import "./App.css"


import {
  BrowserRouter, 
  Routes, 
  Route,
} from "react-router-dom";


function App() {

  
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route 
          exact path="create"
          element={<AddPostForm />}
        />
        <Route
          exact path="blogs"
          element={<ViewBlogs />} 
        />
        <Route exact path='about' element={<About />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
