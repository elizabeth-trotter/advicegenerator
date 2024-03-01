import React, { useEffect, useState } from 'react';
import getData from '../DataServices/DataService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import diceBtn from '../icon-dice.svg';
import patternDesktop from '../pattern-divider-desktop.svg';
import patternMobile from '../pattern-divider-mobile.svg';
import Advice from '../Interfaces/Interface';
import '../styles/Home.css'
import { Container, Row, Col } from 'react-bootstrap';
import { relative } from 'path';

const HomeComponent = () => {
    const [adviceInfo, setAdviceInfo] = useState<Advice>();
    const [newAdvice, setNewAdvice] = useState(true);

    useEffect(() => {
        const adviceData = async () => {
            const fetchedData = await getData();
            setAdviceInfo(fetchedData);
        };

        adviceData();
    }, [newAdvice])

    const handleNewAdvice = () => {
        setNewAdvice(!newAdvice)
    };

    return (
        <Container fluid className='vh-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: 'hsl(218, 23%, 16%)' }}>
            <Row>
                <Col>
                    <Card style={{ backgroundColor: 'hsl(217, 19%, 24%)', color: 'hsl(193, 38%, 86%)', borderRadius: 15, position: 'relative' }} className='text-center cardSize'>
                        <Card.Body className='d-flex flex-column justify-content-center'>
                            <Card.Title style={{ color: 'hsl(150, 100%, 66%)', fontSize: 12, letterSpacing: 4, paddingBottom: 14 }}>ADVICE #{adviceInfo && adviceInfo.slip.id}</Card.Title>
                            <Card.Text style={{ fontSize: 28, fontFamily: 'Manrope', fontWeight: '800', paddingBottom: 2 }}>
                                "{adviceInfo && adviceInfo.slip.advice}"
                            </Card.Text>
                            <div className='desktopImg' style={{paddingLeft: 15, paddingRight: 15}}>
                                <img src={patternDesktop} alt="quote line pattern" className='w-100'/>
                            </div>
                            <div className='mobileImg' style={{paddingLeft: 15, paddingRight: 15}}>
                                <img src={patternMobile} alt="quote line pattern" className='w-100'/>
                            </div>
                            <Button className='button' style={{
                                backgroundColor: 'hsl(150, 100%, 66%)', 
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                bottom: -25,
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }} onClick={handleNewAdvice}><img src={diceBtn} alt="dice button" /></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeComponent
