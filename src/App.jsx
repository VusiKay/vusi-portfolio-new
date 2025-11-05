import { Routes, Route } from 'react-router-dom'

import Footer from './Components/Layout/Footer'
import Body from './routes/Home'
/* import Contact from './routes/Contact' */

import MainNavigation from './Components/Layout/MainNavigation'
import About from './routes/About'

function App() {
  

  return (
    
    <div>
<Home />
   {/* <Header />
    <Body /> */}
    {/* <Contact /> */}
 {/*    <About />
    <Footer /> */}
 {/* <MainNavigation /> */}
{/* <Routes>
 
<Route path='/' element={<AllMeetupsPage />}/>
<Route path='/new-meetup' element={<NewMeetupPage />}/>
<Route path='/favorites' element={<FavoritesPage />}/>

</Routes> */}
    </div>
  )
}

export default App
