import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/features/Home'
import Request from './components/features/Request'

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
