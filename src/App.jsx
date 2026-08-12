import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

import beeWitchedImg1 from "./assets/beeWitchedImg1.png";
import beeWitchedTrailer from "./assets/beeWitchedTrailer.mp4";
import bigRedPath from "./assets/bigRedPath.png";
import bigRedPathVideo from "./assets/bigRedPathVideo.mp4";
import bigRedPathIntro from "./assets/bigRedPathIntroImg.png";
import susbWebsite from "./assets/susbWebsite.png";
import ohMyCamel from "./assets/ohMyCamelTitleScreen.png";
import ohMyCamelVideo from "./assets/ohMyCamelGame.mp4"

import Footer from "./components/Footer";

function App() {

  const projects = [
          {   
              id: 1, 
              image: beeWitchedImg1, 
              title: "BeeWitched", 
              tools: ["Java", "LibGDX", "Figma"], 
              description: "🎮 A cozy two-phased desktop game perfect for all ages! Published on Steam.", 
              page: "/projects#BeeWitched", 
              titleGradient: "#f6bc62, #9e58b1", 
              toolboxColor: "#f6bc62",
              media: {
                type: "video",
                src: beeWitchedTrailer,
                poster: beeWitchedImg1, // thumbnail
                alt: "BeeWitched Trailer"
              },
              role: "Project Lead & Programmer",
              bullets: [
                "Designed game loop architecture, game-over conditions, and interactive UI components.",
                "Integrated audio and worked on responsive feedback animations.",
                "Led weekly team meetings to refine gameplay design based off of playtesting critiques and feedback."
              ],
              takeaway: "Gained hands-on experience in designing game architecture, cross-functional team leadership, and writing technical project specifications.",
              link: 
                {btnTitle: "Download on Steam", url:"https://store.steampowered.com/app/4811560/BeeWitched/"}
              
          },
          {   
              id: 2, 
              image: bigRedPath, 
              title: "Big Red Path", 
              tools: ["Kotlin", "Android Jetpack", "MVVM"], 
              description: "🏆 A course and schedule planning Android app made for Cornell University students. Won Best Overall in Cornell AppDev's Spring 2026 Hackathon.", 
              page: "/projects#BigRedPath", 
              titleGradient: "#f6f1e8, #8b1818", 
              toolboxColor: "#f0e9dc",
              media: {
                type: "video",
                src: bigRedPathVideo,
                poster: bigRedPathIntro, // thumbnail
                alt: "Big Red Path Video"
              },
              role: "Front-end Programmer",
              bullets: [
                "Built responsive Android UI screens using MVVM architecture to separate UI logic from backend data.",
                "Integrated API calls and state management to display dynamic course data and student schedules.",
                "Collaborated with 1 front-end dev and 3 back-end engineers to design and ship the app in 1 week."
              ],
              takeaway: "Gained expertise with Android UI development, MVVM architecture, and API integration under tight hackathon deadlines.",
              link: 
                {btnTitle: "Take a look on Github", url:"https://github.com/Rubindai/SP26-androidAppDevHackathon.git"}
              
          },
          {   
              id: 3, 
              image: susbWebsite, 
              title: "Sustainabytes", 
              tools: ["HTML", "CSS", "React", "Figma"], 
              description: "🌱 Official site for Cornell's Computational Sustainability Club (Sustainabytes).", 
              page: "/projects#Sustainabytes", 
              titleGradient: "#ebcae8, #51b976", 
              toolboxColor: "#ebcae8",
               media: {
                type: "image",
                src: susbWebsite,
                alt: "Sustainabytes Website Image"
              },
              role: "Web Developer Lead",
              bullets: [
                "Designed UI in Figma and implemented them into reusable, modular React components.",
                "Built responsive page layouts using CSS for mobile and desktop devices.",
                "Co-led frontend development with co-developer lead."
              ],
              takeaway: "Increased proficiency in component-driven UI development, translating Figma designs to code, and leading web development workflows.",
              link: 
                {btnTitle: "Visit the website", url:"https://sustainabytes.org"}
              
          },
          {   
              id: 4, 
              image: ohMyCamel, 
              title: "Oh My Camel", 
              tools: ["OCaml", "Raylib"], 
              description: "🐫 A pet simulator game built in OCaml for CS 3110: Data Structures and Functional Programming.", 
              page: "/projects#OhMyCamel", 
              titleGradient: "#93ce5a, #d6865c", 
              toolboxColor: "#93ce5a",
              media: {
                type: "video",
                src: ohMyCamelVideo,
                alt: "Oh My Camel Gameplay"
              },
              role: "Programmer",
              bullets: [
                "Programmed game mechanics and state transition logic using functional data structures in OCaml.",
                "Integrated Raylib to render 2D sprites, capture keyboard inputs, and manage the game frame loop.",
                "Collaborated with team members to design code architecture and debug code."
              ],
              takeaway: "Gained experience applying functional programming paradigms.",
              link: 
                {btnTitle: "Download on Github", url:"https://github.com/clin0595/OhMyCamel.git"}
              
          }
      ]

  return (
    <div>
      <Navbar projects={projects} />
      <main>
        <Outlet context={projects}/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
