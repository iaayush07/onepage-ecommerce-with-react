import './App.css'
import Header from './header'
import Cart from './cart'

function App() {

  return (
    <>
    <main className='d-flex flex-column'>
      <Header/>
      <div className="flex-grow-1 d-flex align-items-center">
        <Cart/>
      </div>
    </main>
    </>
  )
}

export default App
