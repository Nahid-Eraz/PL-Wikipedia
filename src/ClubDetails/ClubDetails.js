import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ClubDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLandmark, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons';

const ClubDetails = () => {
    const { clubId } = useParams();
    const [club, setClub] = useState({});

    const checkGender = club.strGender;
    // console.log(checkGender);
    let gender;
    if(checkGender){
        gender = <img className="gender-image" src="http://www.voxplay.com/sites/default/files/styles/article_full_image/public/img_article/image.php-10.png?itok=t7oRVt4M" alt=""/>
    }
    else{
        gender = <img className="gender-image" src="https://fifpro.org/media/n5omb0gd/2020-world11-women-2500.jpg?center=0.13689437659374582,0.69573642412092418&mode=crop&heightratio=0.6363636363636363636363636364&width=700&rnd=132527056407030000" alt=""/>
    }

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
                <Row className="d-flex justify-content-center mt-3">
                    <Row className="club-top-container d-flex justify-content-between">
                        <Col md={7} className="club-top-container-text">
                            <h3>{club.strTeam}</h3>
                            <p><FontAwesomeIcon icon={faLandmark} /> Founded: {club.intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {club.strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport type: {club.strSport}</p>
                            <p><FontAwesomeIcon icon={faVenusMars} /> Gender: {club.strGender}</p>
                        </Col>
                        <Col md={5}>
                            {gender}
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <div className="mt-3">
                        <p>{club.strDescriptionEN}</p>
                        <p>{club.strStadiumDescription}</p>
                    </div>
                </Row>
                <div className="d-flex justify-content-center">
                    <a className="footer-fav-icon" target="_blank" href={`https://${club.strTwitter}`}><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    <a className="footer-fav-icon" target="_blank" href={`https://${club.strYoutube}`}><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                    <a className="footer-fav-icon" target="_blank" href={`https://${club.strFacebook}`}><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a>
                </div>
            </Container>

        </div>
    );
};

export default ClubDetails; <h1>club details</h1>