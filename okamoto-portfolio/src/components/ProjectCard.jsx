import { Card, Button } from 'react-bootstrap';

function ProjectCard({ imgSrc, title, text, repoLink, deployedLink }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed site
        </Button>
        <Button variant="primary" href={repoLink} target="_blank" rel="noopener noreferrer">
          Repo
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;