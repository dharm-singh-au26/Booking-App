import Featured from "../../components/featured/Featured"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./Home.css"

function Home() {
  return (
    <div>

    <Navbar/>
    <Header/>
    <div className="homeContainer">
    <Featured/>

    </div>
   
    </div>
    
    
  )
}

export default Home