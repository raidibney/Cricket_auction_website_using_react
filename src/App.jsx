import { Suspense, useState } from 'react'
import './App.css'
import navimg from "./assets/logo.png"
import AvailablePlayer from './Components/AvailablePlayers/AvailablePlayer'
import BannerSection from './Components/BannerSection/BannerSection'

const playerDetails = async () => {
  const res = await fetch("/Players.json")
  return res.json()
}

function App() {
  const [coin, setcoin] = useState(500000)

  // state for selected players
  const [selectedPlayers, setSelectedPlayers] = useState([])

  const playerpromise = playerDetails()

  return (
    <>
      {/* Navbar */}
      <div>
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

      <BannerSection />

      <Suspense fallback={
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner text-warning"></span>
        </div>
      }>
        <AvailablePlayer  
          playerpromise={playerpromise} 
          setcoin={setcoin} 
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      </Suspense>
    </>
  )
}

export default App