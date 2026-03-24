import { Suspense, useState } from 'react'
import './App.css'
import navimg from "./assets/logo.png"
import AvailablePlayer from './Components/AvailablePlayers/AvailablePlayer'
import BannerSection from './Components/BannerSection/BannerSection'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'

const playerDetails = async ()=>{
  const res=await fetch("/Players.json")
  return  res.json()
}
function App() {
  const [coin, setcoin]=useState(5000000)
  const playerpromise=playerDetails()
  return (
    <>
      {/* Navbar */}
      <div className="">
        <div className="navbar bg-base-100 shadow-sm rounded-xl max-w-11/12 m-auto">
          
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">
              <img src={navimg} alt="logo" />
            </a>
          </div>

          <div className="flex-none gap-2">
            <span className='text-xl font-bold'>{coin}</span>
            <span className='text-xl font-bold'> coin</span>
            
          </div>

        </div>
      </div>

      {/*inheriting the components from here */}
      <BannerSection></BannerSection>
      <Suspense   fallback={
       <div className="flex justify-center items-center h-40">
       <span className="loading loading-spinner text-warning"></span>
       </div>
         }>
      <AvailablePlayer  playerpromise={playerpromise} setcoin={setcoin} coin={coin} ></AvailablePlayer>
      </Suspense>
     
        
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App