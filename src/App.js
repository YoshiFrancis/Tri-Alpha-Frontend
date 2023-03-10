import Header from "./components/Heading/Header";
import Body from "./components/Body/Body"
import Footer from "./components/Footer/Footer";

import "./App.css"
import postService from './services/posts'
function App() {

  
  return (
    <>
      <Header />
      <Body postService={postService}/>
      <Footer />
    </>
    

  )
}

export default App
