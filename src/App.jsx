import './css/App.css'
import { Navbar } from './composants/Nav'
import { Main } from './composants/Main'
import { Messages } from './composants/Messages'
import { Advertising } from './composants/Advertising'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Messages></Messages>
      <Main></Main>
      <Advertising></Advertising>
    </>
  )
}

export default App
