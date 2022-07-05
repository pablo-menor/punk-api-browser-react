import { useState } from 'react'
import './App.css'

import { Browser } from './components/pure/Browser'
import { SearchResult } from './components/container/SearchResult'

function App() {
  const [currentSearch, setCurrentSearch] = useState('')

  function newSearch(foodName) {
    setCurrentSearch(foodName)
  }

  return (
    <div className="App">
      <h1>Food recipes search</h1>
      <h2>By Pablo Menor</h2>
      <Browser updateSearch={newSearch}></Browser>
      <SearchResult currentSearch={currentSearch}></SearchResult>
    </div>
  )
}

export default App
