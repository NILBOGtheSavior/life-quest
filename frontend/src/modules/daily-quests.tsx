export default function DailyQuests (){
  return (
  <div className="panel">
    <h2>Daily Quests</h2>
      <DailyQuest
        quest_name="Do daily exercise"
        progress={75}
      />
  </div>
  );
}

export function DailyQuest ({quest_name, progress}:{
  quest_name: string,
  progress: number
}){
  return (
    <div>
      <h3>{quest_name}</h3>
      <small>{progress}%</small>
    </div>
  );
}
