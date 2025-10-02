'use client'

import Canvas from './components/Canvas/Canvas'
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen'
import { HomeContent } from './components/HomeContent/HomeContent'
// import * as styles from './page.css'

const Home = () => {
  return <>
    <Canvas />
    <LoadingScreen />
    <HomeContent />
  </>
}

export default Home
