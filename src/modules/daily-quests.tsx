export default function DailyQuests (){
  return (
  <div class="daily_quests">
    <h2>Daily Quests</h2>
      <DailyQuest
        quest_name="Do daily exercise"
        progress="75%"
      />
  </div>
  );
}

function DailyQuest ({quest_name, progress}){
  return (
    <div>
      <h3>{quest_name}</h3>
      <p>{progress}</p>
    </div>
  );
}
