import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import modules

import DailyQuests from './modules/quest-modules.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <h1>Life Quest</h1>
        <DailyQuests />
     </div>
    </>
  )
}

export default App
