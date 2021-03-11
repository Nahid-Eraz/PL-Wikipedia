import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ClubDetails = () => {
    const { clubId } = useParams();
    const [club, setClub] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setClub(data.teams[0]))
    }, [])
    return (
        <div>
            <div className="front-img">
                <img style={{ width: '250px' }} src={club.strTeamBadge} alt="" />
            </div>
            <Container>
                <Row>
                    <Row>
                        <Col md={6}>
                            <p>Founded: {club.intFormedYear}</p>
                            <p>Country: {club.strCountry}</p>
                            <p>Sport type: {club.strSport}</p>
                            <p>Gender: {club.strGender}</p>
                        </Col>
                        <Col md={6}>2 of 2</Col>
                    </Row>
                </Row>
                <Row>
                    <div>
                        <p>{club.strDescriptionEN}</p>
                        <p>{club.strStadiumDescription}</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ClubDetails; <h1>club details</h1>