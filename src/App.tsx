import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function Navigation () {
  return (
    <div>
      <Link to="/">Hom</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

function Home () {
  return (
    <div>
      <h1>Home</h1>
      <Navigation />
    </div>
  )
}

function About () {
  return (
    <div>
      <h1>About</h1>
      <Navigation />
    </div>
  )
}

console.log("import.meta.env")
console.log(import.meta.env)

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
