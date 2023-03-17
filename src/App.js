import Header from "./components/Header.js";
import Body from "./components/Body.js"
import Footer from "./components/Footer.js";
import About from "./components/About.js"
import AddPostForm from "./components/AddPostForm.js";

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
        <Route exact path='/' element={<Body />} />
        <Route 
          exact path="create"
          element={<AddPostForm />}
        />
        <Route exact path='about' element={<About />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
