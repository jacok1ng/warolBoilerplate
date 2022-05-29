import { Route, Routes } from "react-router-dom"
import { Desk, Location, Reservation } from "../modules"
import { Navigation } from "../shared"
import "./App.css"
import { BaseApp } from "./App.style"

function App() {
  return (
    <BaseApp>
      <Navigation color="green" />
      <Routes>
        <Route path="/" element={<Desk />} />
        <Route path="/desk" element={<Desk />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Routes>
    </BaseApp>
  )
}

export default App
