import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import beeWitchedImg1 from "./assets/beeWitchedImg1.png";
import bigRedPath from "./assets/bigRedPath.png";
import susbWebsite from "./assets/susbWebsite.png";
import ohMyCamel from "./assets/ohMyCamelTitleScreen.png"
import Footer from "./components/Footer";

function App() {

  const projects = [
          {   
              id: 1, 
              image: beeWitchedImg1, 
              title: "BeeWitched", 
              tools: ["Java", "LibGDX", "Figma"], 
              description: "A cozy two-phased desktop game perfect for all ages! Published on Steam.", 
              page: "/", 
              titleGradient: "#f6bc62, #9e58b1", 
              toolboxColor: "#f6bc62"
          },
          {   
              id: 2, 
              image: bigRedPath, 
              title: "Big Red Path", 
              tools: ["Kotlin"], 
              description: "A course and schedule planning Android app made for Cornell University students. Won Best Overall in Cornell AppDev’s Spring 2026 Hackathon.", 
              page: "/", 
              titleGradient: "#f6f1e8, #8b1818", 
              toolboxColor: "#f6f1e8"
          },
          {   
              id: 3, 
              image: susbWebsite, 
              title: "Sustainabytes", 
              tools: ["HTML", "CSS", "React", "Figma"], 
              description: "Home site for Cornell's Computational Sustainability Club (Sustainabytes).", 
              page: "/", 
              titleGradient: "#ebcae8, #51b976", 
              toolboxColor: "#ebcae8"
          },
          {   
              id: 4, 
              image: ohMyCamel, 
              title: "Oh My Camel", 
              tools: ["OCaml", "Raylib"], 
              description: "A pet simulator game coded in OCaml for CS course CS 3110: Data Structures and Functional Programming.", 
              page: "/", 
              titleGradient: "#93ce5a, #d6865c", 
              toolboxColor: "#93ce5a"
          }
      ]

  return (
    <div>
      <Navbar/>
      <main>
        <Outlet context={projects}/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
