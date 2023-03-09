import { DiHtml5, DiCss3, DiJsBadge, DiMysql, DiReact, DiScrum, DiSass,} from 'react-icons/di'
import { SiFirebase} from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "scrum", name: "Scrum", icon: <DiScrum /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "firebase", name: "Firebase", icon: <SiFirebase /> },
];

const TechnologiesContainer = () => {
  return <section className='technologies-container'>
    <h2>Tecnologias</h2> <br/>
    <div className='technologies-grid'>
      {technologies.map((tech) => (
        <div className='technology-card' id={tech.id} key={tech.id}>
          {tech.icon}
          <div className='technology-info'>
            <h3>{tech.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
}

export default TechnologiesContainer
