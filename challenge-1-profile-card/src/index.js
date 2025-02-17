import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css"

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src='jonas.jpeg' alt='Jonas Schmedtmann' />
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtamann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.length > 0 && skills.map(skill => (
        <Skill skill={ skill } />
      ))}
    </div>
  )
}

function Skill({skill}) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>
        {skill.level === 'beginner' && '😀'}
        {skill.level === 'intermediate' && '👻'}
        {skill.level === 'advanced' && '💪'}
      </span>
    </div>
  );
}

