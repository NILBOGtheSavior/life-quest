import { useState } from 'react'
import './css/App.css'

// Import modules

import DailyQuests from './modules/daily-quests'
import SkillQuests from './modules/skill-quests'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Life Quest</h1>
        <div className='panel_container grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-100 min-h-screen'>
          <DailyQuests />
          <SkillQuests />
        </div>
      </div>
    </>
  )
}

export default App
