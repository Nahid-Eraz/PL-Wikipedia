import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <div>
            <div className="front-img">
                <h1 >Hyper Sports</h1>
            </div>
            <Container className="mt-5">
                <h1 style={{textAlign:'center', color:'grey'}}>404 Not Found</h1>
            </Container>
        </div>
        </div>
    );
};

export default NotFound;