export default function SkillQuests () {
  return (
    <div className="panel">
      <h2> Skill Quests </h2>
      <SkillQuest
        skill="Touch Typing"
        level={1}
      />
    </div>
  );
}

function SkillQuest ({skill, level}) {
  return (
    <div>
      <p>{skill} <sup><small>LVL {level}</small></sup></p>
    </div>
  );
}