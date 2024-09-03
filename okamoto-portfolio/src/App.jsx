import { Outlet } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
