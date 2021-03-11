import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Club.css';

const Club = (props) => {
    console.log(props);
    const { idTeam, strTeamBadge, strTeam, strLeague, strStadium, intStadiumCapacity } = props.club;
    const history = useHistory();
    const showDetails = (clubId) =>{
        const url = (`/club/${clubId}`);
        history.push(url);
    }
    return (
        <Container>
            <div className="card-style">
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>
                            <p>{strLeague}</p>
                            <p> <small>Stadium: {strStadium} <br /> Capacity : {intStadiumCapacity}</small></p>
                        </Card.Text>
                        <Button onClick={() => showDetails(idTeam)} variant="primary">Show Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Club;