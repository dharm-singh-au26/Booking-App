import Featured from "../../components/featured/Featured"
import { FeaturedProperties } from "../../components/featuredProperties/FeaturedProperties"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import "./Home.css"

function Home() {
  return (
    <div>

    <Navbar/>
    <Header/>
    <div className="homeContainer">
    <Featured/>
    <h1 className="homeTitles">Browse by property type</h1>
    <PropertyList/>
    <h1 className="homeTitles">Homes Guest love </h1>
    <FeaturedProperties/>

    </div>
   
    </div>
    
    
  )
}

export default Home