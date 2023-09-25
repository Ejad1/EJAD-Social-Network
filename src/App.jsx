import './css/App.css'
import { Navbar } from './composants/Nav'
import { Main } from './composants/Main'
import { Messages } from './composants/Messages'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Messages></Messages>
      <Main></Main>
    </>
  )
}

export default App
