import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import UserTable from './components/Table'

function App() {

  const [filter,setFilter] = useState("income");



  return (
    <>
      <Nav setFilter = {setFilter} filter = {filter}/>
      <UserTable filter = {filter}/>
    </>
  )
}

export default App
