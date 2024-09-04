import { Outlet } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/index.css'

function App() {

  return (
    <body>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  )
}

export default App
