import { useState } from 'react'
import './css/App.css'

// Import modules

import DailyQuests from './modules/daily-quests.tsx'
import SkillQuests from './modules/skill-quests.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <h1>Life Quest</h1>
        <div className='panel_container'>
          <DailyQuests />
          <SkillQuests />
        </div>
     </div>
    </>
  )
}

export default App
