import style from './ProjectsStyle.module.css';
import ProjectCard from '../../common/ProjectCard';
import { projects } from '../../common/data';

function Projects() {
    return (
        <section id='projects' className={style.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={style.projectsContainer}>
                {projects.map((item) => (
                    <ProjectCard
                        key={item.id}
                        src={item.src}
                        link={item.link}
                        h3={item.h3}
                        p={item.p}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects