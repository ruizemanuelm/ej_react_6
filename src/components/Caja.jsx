import React from 'react';
import { Card, Button } from 'react-bootstrap';
const Caja = ({color}) => {
    return (
        <article className=' d-flex'>
    <Card className='col-12 justify-content-between mx-2 text-center'>
        <Card.Body>
          <Card.Title>{color}</Card.Title>
                <div className="d-flex justify-content-center">
                <div className="caja-azul"></div>
            </div>
          <Button variant="primary" className="my-2">Borrar</Button>
        </Card.Body>
    </Card>
        </article>
    );
};

export default Caja;