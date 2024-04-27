import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import NoteContent from './components/NoteContent'
import Buttons from './components/Buttons'
import Notes from './components/Notes'

function App() {
 

  return (
    <div className='flex flex-col'>

        <Header></Header>
        <Buttons></Buttons>
        <NoteContent ></NoteContent>
        
    </div>
  )
}

export default App
