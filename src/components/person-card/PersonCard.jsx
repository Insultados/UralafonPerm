import React from "react";
import { Card } from 'react-bootstrap'
import person from '../../img/person.jpg'

const PersonCard = () => {
    return (<Card style={{ width: '90%', height: '490px', border: 'none' }}>
        <Card.Text style={{ textAlign: 'center', fontSize: '18px', fontWeight: '800' }}>
            АРХИПАСТЫРЬ
        </Card.Text>
        <Card.Img src={person} />
        <Card.Body>
            <Card.Title >
                Митрополит Пермский и Кунгурский Мефодий
            </Card.Title>
        </Card.Body>
    </Card>)
}

export default PersonCard;
