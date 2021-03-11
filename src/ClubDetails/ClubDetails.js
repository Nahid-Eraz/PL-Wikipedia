import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ClubDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons';

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
        <div className="club-detail-bg-color">
            <div className="front-img">
                <img style={{ width: '250px' }} src={club.strTeamBadge} alt="" />
            </div>
            <Container>
                <Row >
                    <Row className="club-top-container">
                        <Col md={8} className="club-top-container-text">
                            <h4>{club.strTeam}</h4>
                            <p>Founded: {club.intFormedYear}</p>
                            <p>Country: {club.strCountry}</p>
                            <p>Sport type: {club.strSport}</p>
                            <p>Gender: {club.strGender}</p>
                        </Col>
                        <Col md={4}>
                            <h2>image section</h2>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <div>
                        <p>{club.strDescriptionEN}</p>
                        <p>{club.strStadiumDescription}</p>
                    </div>
                </Row>
                <div className="d-flex justify-content-center">
                    <a className="footer-fav-icon" target="_blank" href={`https://${club.strTwitter}`}><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                    <a className="footer-fav-icon" target="_blank" href={`https://${club.strYoutube}`}><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                    <a className="footer-fav-icon" target="_blank" href={`https://${club.strFacebook}`}><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a>
                </div>
            </Container>

        </div>
    );
};

export default ClubDetails; <h1>club details</h1>