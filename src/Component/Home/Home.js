import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Club from '../Club/Club';
import './Home.css';



const Home = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328"
        fetch(url)
            .then(res => res.json())
            .then(data => setClubs(data.teams))
    }, [])
    return (
        <div>
            <div className="front-img">
                <h1 >Hyper Sports</h1>
            </div>
            <Container className="main-container">
                {
                    clubs.map(club => <Club club={club}></Club>)
                }
            </Container>
        </div>
    );
};

export default Home;