import { Outlet } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/index.css'

function App() {

  return (
    <div className='bodyWrapper'>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
