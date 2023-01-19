import Card from 'react-bootstrap/Card'
import picture from './githubcard.JPG'

function GitHubCard() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>GitHubCard</Card.Title>
            <Card.Text>
              My name is Chase and I am a software development student!
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }

export default GitHubCard