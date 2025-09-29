'use client'

import Canvas from './components/Canvas/Canvas'
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen'
// import * as styles from './page.css'

const Home = () => {
  return <>
    <Canvas />
    <LoadingScreen />
  </>
}

export default Home
