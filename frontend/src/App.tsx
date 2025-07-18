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
        <DailyQuests />
        <SkillQuests />
      </div>
    </>
  )
}

export default App
