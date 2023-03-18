import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link className='home-btn' id='left-home-btn' to='about'>Learn<br></br>More</Link>
            <Link className='home-btn' id='right-home-btn' to='blogs'>View<br></br>Posts</Link>
            <div id="body">
            </div>
        </div>
        
    )
}

export default Home