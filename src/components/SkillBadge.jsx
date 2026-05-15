export default function SkillBadge({ name, level }) {
  return <span className={`skill-badge skill-badge--${level}`}>{name}</span>
}
