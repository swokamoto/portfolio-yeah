import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import pokeLounge from '../assets/pokeLounge.png';

const projects = [
  {
    imgSrc: 'path/to/image1.jpg',
    title: 'Project Title 1',
    text: 'Project description 1 goes here.',
    repoLink: 'https://github.com/your-repo1',
    deployedLink: ''
  },
  {
    imgSrc: 'path/to/image2.jpg',
    title: 'Project Title 2',
    text: 'Project description 2 goes here.',
    repoLink: 'https://github.com/your-repo2',
    deployedLink: ''
  },
  {
    imgSrc: pokeLounge,
    title: 'PokéLounge',
    text: 'Hangout and relax with your favorite Pokemon.',
    repoLink: 'https://github.com/group11projectpokemon/group-11-project-pokemon/',
    deployedLink: ''
  }
];

function Projects() {
  return (
    <>
      <h2><center>Projects</center></h2>
      <section className='projectWrapper'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            imgSrc={project.imgSrc} 
            title={project.title} 
            text={project.text} 
            repoLink={project.repoLink}
            deployedLink={project.deployedLink}
          />
        ))}
      </section>
    </>
  );
}

export default Projects;